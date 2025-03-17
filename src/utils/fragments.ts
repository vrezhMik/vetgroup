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
  query {
    products(pagination: { limit: 10000 }) {
      code
      name
      description
      price
      image {
        url
      }
    }
  }
`;

export const ADD_ORDER_FRAGMENT = gql`
  mutation CreateOrder(
    $order_id: String!
    $created: DateTime!
    $total: Float!
    $products: String!
    $users_permissions_user: ID!
    $products_json: JSON!
  ) {
    createOrder(
      data: {
        order_id: $order_id
        created: $created
        total: $total
        products: $products
        users_permissions_user: $users_permissions_user
        products_json: $products_json
      }
    ) {
      order_id
      created
      total
      products
      products_json
      users_permissions_user {
        email
      }
    }
  }
`;

export const GET_ORDER_ID = gql`
  query {
    orders(sort: "id:desc", pagination: { limit: 1 }) {
      order_id
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
