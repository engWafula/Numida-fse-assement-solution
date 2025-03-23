/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
};

export type ExistingLoans = {
  __typename?: 'ExistingLoans';
  dueDate?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interestRate?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  payments?: Maybe<Array<Maybe<LoanPayment>>>;
  principal?: Maybe<Scalars['Int']['output']>;
};

export type LoanPayment = {
  __typename?: 'LoanPayment';
  id?: Maybe<Scalars['Int']['output']>;
  loanId?: Maybe<Scalars['Int']['output']>;
  paymentDate?: Maybe<Scalars['Date']['output']>;
};

export type Query = {
  __typename?: 'Query';
  loans?: Maybe<Array<Maybe<ExistingLoans>>>;
};

export type GetLoansAndPaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoansAndPaymentsQuery = { __typename?: 'Query', loans?: Array<{ __typename?: 'ExistingLoans', id?: number | null, name?: string | null, interestRate?: number | null, principal?: number | null, dueDate?: any | null, payments?: Array<{ __typename?: 'LoanPayment', id?: number | null, loanId?: number | null, paymentDate?: any | null } | null> | null } | null> | null };


export const GetLoansAndPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLoansAndPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"interestRate"}},{"kind":"Field","name":{"kind":"Name","value":"principal"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"loanId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetLoansAndPaymentsQuery, GetLoansAndPaymentsQueryVariables>;