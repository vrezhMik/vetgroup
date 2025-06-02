import { gql } from "@apollo/client";

export const LOGIN_FRAGMENT = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        documentId
        id
      }
    }
  }
`;

export const USER_FRAGMENT = gql`
  query GetVetgroupUsers($id: ID!) {
    vetgroupUsers(filters: { user: { documentId: { eq: $id } } }) {
      user {
        first_name
        last_name
        company
        code
      }
    }
  }
`;

export const CHANGE_PASSWORD_FRAGMENT = gql`
  mutation ChangePassword(
    $old_password: String!
    $new_password: String!
    $confirm_password: String!
  ) {
    changePassword(
      currentPassword: $old_password
      password: $new_password
      passwordConfirmation: $confirm_password
    ) {
      user {
        documentId
      }
    }
  }
`;

export const GET_PRODUCTS_FRAGMENT = gql`
  query GetProducts($start: Int!, $limit: Int!) {
    products(pagination: { start: $start, limit: $limit }, sort: "name:asc") {
      code
      name
      description
      price
      backendId
      stock
      pack_price
      image {
        url
      }
      category {
        title
      }
    }
  }
`;

export const GET_PRODCUTS_BY_CAT = gql`
  query GetProductsByCat($cat: String!, $start: Int!, $limit: Int!) {
    products(
      filters: { category: { title: { eq: $cat } } }
      pagination: { start: $start, limit: $limit }
      sort: ["name:asc"]
    ) {
      code
      name
      description
      price
      backendId
      stock
      pack_price
      image {
        url
      }
    }
  }
`;

export const GET_USER_ORDERS = gql`
  query ($documentId: ID!) {
    orders(
      filters: { users_permissions_user: { documentId: { eq: $documentId } } }
    ) {
      order_id
      total
      created
      products_json
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories(sort: ["priority:asc"], pagination: { limit: -1 }) {
      title
    }
  }
`;

export const GET_SEARCH_FRAGMENTS = gql`
  query SearchProducts($filters: ProductFiltersInput) {
    products(filters: $filters, pagination: { limit: -1 }, sort: "name:asc") {
      code
      name
      description
      price
      backendId
      stock
      pack_price
      category {
        title
      }
      image {
        url
      }
    }
  }
`;
