import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      toke
      refreshToke
      user {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
    }
  }
`;
