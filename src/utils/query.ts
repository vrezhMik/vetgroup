import { graphQL_Query } from "./graphql";
import { LOGIN_FRAGMENT } from "./fragments";
import { USER_FRAGMENT } from "./fragments";
import { CHANGE_PASSWORD_FRAGMENT } from "./fragments";
import { GET_PRODUCTS_FRAGMENT } from "./fragments";
import { ADD_ORDER_FRAGMENT } from "./fragments";
import Cookies from "js-cookie";
import { Item } from "@/classes/ItemClass";
import { GET_ORDER_ID } from "./fragments";
import { GET_USER_ORDERS } from "./fragments";
import { ApolloError } from "@apollo/client";
import { loginFormState } from "@/store/store";
import { GET_CATEGORIES } from "./fragments";
import { GET_PRODCUTS_BY_CAT } from "./fragments";
import { GET_SEARCH_FRAGMENTS } from "./fragments";

function setWrongLogin(value: boolean) {
  loginFormState.setState({ isError: value });
}

const getFormattedCurrentDate = () => {
  return new Date().toISOString().split(".")[0] + "Z";
};

const generateTableHTML = (items: Item[]) => {
  if (!Array.isArray(items) || items.length === 0)
    return "<p>No items available</p>";

  let tableHTML = `
    <table border='1' cellpadding='5' cellspacing='0' style='border-collapse: collapse; width: 100%;'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>`;

  items.forEach((item) => {
    tableHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.code}</td>
        <td>${item.description}</td>
        <td>${
          item.image ? `<img src='${item.image}' width='50'>` : "No Image"
        }</td>
        <td>${item.price} AMD</td>
        <td>${item.qty}</td>
      </tr>`;
  });

  tableHTML += `
      </tbody>
    </table>`;

  return tableHTML.trim();
};

export async function login(identifier: string, password: string) {
  try {
    const response = await graphQL_Query(LOGIN_FRAGMENT, {
      identifier,
      password,
    });
    if (!response || response.errors) {
      setWrongLogin(true);
      return;
    }
    const { jwt } = response.login;

    if (!jwt) {
      throw new Error("JWT not found in the response");
    }
    document.cookie = `jwt=${jwt}; path=/; SameSite=Strict`;

    const { documentId, id } = response.login.user;
    if (!documentId) {
      throw new Error("documentId not found in the response");
    }
    const user = await get_current_user(documentId);
    window.location.href = "/";
    document.cookie = `code=${user.vetgroupUsers[0].user.code}; path=/; SameSite=Strict`;

    document.cookie = `document=${documentId}; path=/; SameSite=Strict`;
    document.cookie = `user=${id}; path=/; SameSite=Strict`;
    setWrongLogin(false);
    return documentId;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function get_current_user(id: string) {
  try {
    const response = await graphQL_Query(USER_FRAGMENT, { id });
    if (!response || response.errors) {
      throw new Error(
        response?.errors?.[0]?.message || "Login failed due to an unknown error"
      );
    }
    return response;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function change_password_query(
  old_password: string,
  new_password: string,
  confirm_password: string
) {
  try {
    const jwt = Cookies.get("jwt");
    const response = await graphQL_Query(
      CHANGE_PASSWORD_FRAGMENT,
      {
        old_password,
        new_password,
        confirm_password,
      },
      { Authorization: `Bearer ${jwt}` }
    );
    return response;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function get_products(start: number, limit: number) {
  try {
    const response = await graphQL_Query(GET_PRODUCTS_FRAGMENT, {
      start,
      limit,
    });
    return response || { products: [] };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] };
  }
}

async function get_order_id() {
  try {
    const response = await graphQL_Query(GET_ORDER_ID, {});
    return response;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}
function getFormattedDateTime(): string {
  const now = new Date();

  const pad = (n: number) => n.toString().padStart(2, "0");

  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const year = now.getFullYear();

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  return `${month}:${day}:${year} ${hours}:${minutes}:${seconds}`;
}
export async function add_order(items: Item[], user: string, total: number) {
  const data = {
    TransactionDate: getFormattedDateTime(),
    ClientID: user,
    Note: "",
    ItemsList: items.map((item) => ({
      ItemID: item.backendId ?? "",
      Quantity: item.qty ?? 0,
    })),
  };

  try {
    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.text();
      console.error("Failed:", error);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function get_user_orders(documentId: string) {
  try {
    const response = await graphQL_Query(GET_USER_ORDERS, {
      documentId,
    });

    if (!response || !response) {
      throw new Error("Invalid response from API");
    }

    return response;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function get_categories() {
  try {
    const response = await graphQL_Query(GET_CATEGORIES, {});
    return response;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function get_products_by_cat(cat: string) {
  try {
    const response = await graphQL_Query(GET_PRODCUTS_BY_CAT, { cat: cat });
    return response;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

function buildSearchFilter(query: string) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);

  const nameFilters = words.map((word) => ({ name: { containsi: word } }));
  const descFilters = words.map((word) => ({
    description: { containsi: word },
  }));

  return {
    or: [{ and: nameFilters }, { and: descFilters }],
  };
}

export async function get_search_fragments(query: string) {
  try {
    const response = await graphQL_Query(GET_SEARCH_FRAGMENTS, {
      filters: buildSearchFilter(query),
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error("GraphQL error:", error.message);
    } else if (error instanceof Error) {
      console.error("JS error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}
