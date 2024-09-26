import { gql } from '@apollo/client';

export const ADD_USER = gql `
 mutation addUser($name: String!) {
    addUser(name: $name) {
        _id
        name
        email
        _typename
    }
  }

`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!){
    login(email: $email){
      token
      user{
        _id
        name
      }
    }
  }
`;