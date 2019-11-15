import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';

export const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;