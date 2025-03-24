import { gql } from "@apollo/client";


export const GET_LOANS_AND_PAYMENTS = gql`
  query GetLoansAndPayments {
    loans {
      id
      name
      interestRate
      principal
      dueDate
      payments {
        id
        loanId
        paymentDate
      }
    }
  }
`;