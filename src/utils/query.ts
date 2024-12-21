import { graphQL_Query } from "./graphql";
import { gql } from "@apollo/client";
import { NextResponse } from "next/server";

const LOGIN_FRAGMENT = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;
export async function login(identifier: string, password: string) {
  try {
    const response = await graphQL_Query(LOGIN_FRAGMENT, {
      identifier,
      password,
    });

    if (!response || response.errors) {
      throw new Error(
        response?.errors?.[0]?.message || "Login failed due to an unknown error"
      );
    }
    console.log(response);
    const { jwt } = response.login;
    if (!jwt) {
      throw new Error("JWT not found in the response");
    }
    document.cookie = `jwt=${jwt}; path=/; secure; SameSite=Strict`;

    window.location.href = "/";
    return NextResponse.redirect(new URL("/", "http://localhost:3000"));
  } catch (error: any) {
    throw new Error(
      error.message || "An unexpected error occurred during login"
    );
  }
}
