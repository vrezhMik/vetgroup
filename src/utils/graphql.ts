import client from "@/app/client";
import { ApolloError } from "@apollo/client";
import { DocumentNode, OperationVariables } from "@apollo/client";

export async function graphQL_Query(
  query: DocumentNode,
  variables: OperationVariables,
  headers?: Record<string, string>
) {
  try {
    const { data, loading, error } = await client.query({
      query: query,
      fetchPolicy: "no-cache",
      variables: variables || null,
      context: {
        headers: headers || {}, // Pass headers here
      },
    });
    if (loading) {
      console.log("Loading data...");
      return null;
    }
    if (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data");
    }
    if (!data) {
      throw new Error("No data found");
    }
    return data;
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
