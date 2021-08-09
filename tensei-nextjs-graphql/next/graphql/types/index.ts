import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type CreateTodoInput = {
  title: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IdWhereQuery = {
  _eq?: Maybe<Scalars['ID']>;
  _ne?: Maybe<Scalars['ID']>;
  _in?: Maybe<Array<Scalars['ID']>>;
  _nin?: Maybe<Array<Scalars['ID']>>;
  _gt?: Maybe<Scalars['ID']>;
  _gte?: Maybe<Scalars['ID']>;
  _lt?: Maybe<Scalars['ID']>;
  _lte?: Maybe<Scalars['ID']>;
  _like?: Maybe<Scalars['ID']>;
  _re?: Maybe<Scalars['ID']>;
  _ilike?: Maybe<Scalars['ID']>;
  _overlap?: Maybe<Scalars['ID']>;
  _contains?: Maybe<Scalars['ID']>;
  _contained?: Maybe<Scalars['ID']>;
};

export type IntegerWhereQuery = {
  _eq?: Maybe<Scalars['Int']>;
  _ne?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _nin?: Maybe<Array<Scalars['Int']>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _like?: Maybe<Scalars['Int']>;
  _re?: Maybe<Scalars['Int']>;
  _ilike?: Maybe<Scalars['Int']>;
  _overlap?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _contained?: Maybe<Scalars['Int']>;
};



export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  twoFactorToken?: Maybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Int'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createManyTodos: Array<Maybe<Todo>>;
  createUser: User;
  createManyUsers: Array<Maybe<User>>;
  updateTodo: Todo;
  updateManyTodos: Array<Maybe<Todo>>;
  updateUser: User;
  updateManyUsers: Array<Maybe<User>>;
  deleteTodo?: Maybe<Todo>;
  deleteManyTodos?: Maybe<Array<Maybe<Todo>>>;
  login: LoginResponse;
  register: RegisterResponse;
  requestPasswordReset: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
};


export type MutationCreateTodoArgs = {
  object: CreateTodoInput;
};


export type MutationCreateManyTodosArgs = {
  objects: Array<Maybe<CreateTodoInput>>;
};


export type MutationCreateUserArgs = {
  object: CreateUserInput;
};


export type MutationCreateManyUsersArgs = {
  objects: Array<Maybe<CreateUserInput>>;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  object: UpdateTodoInput;
};


export type MutationUpdateManyTodosArgs = {
  where: TodoWhereQuery;
  object: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  object: UpdateUserInput;
};


export type MutationUpdateManyUsersArgs = {
  where: UserWhereQuery;
  object: UpdateUserInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteManyTodosArgs = {
  where?: Maybe<TodoWhereQuery>;
};


export type MutationLoginArgs = {
  object: LoginInput;
};


export type MutationRegisterArgs = {
  object: CreateUserInput;
};


export type MutationRequestPasswordResetArgs = {
  object: RequestPasswordResetInput;
};


export type MutationResetPasswordArgs = {
  object: ResetPasswordInput;
};

export type PasswordReset = {
  __typename?: 'PasswordReset';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  expiresAt?: Maybe<Scalars['String']>;
};

export type PasswordResetQueryOrder = {
  createdAt?: Maybe<QueryOrder>;
  updatedAt?: Maybe<QueryOrder>;
};

export type PasswordResetSubscriptionFilter = {
  id?: Maybe<IdWhereQuery>;
  createdAt?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
  email?: Maybe<StringWhereQuery>;
  expiresAt?: Maybe<StringWhereQuery>;
};

export type PasswordResetWhereQuery = {
  _and?: Maybe<Array<Maybe<PasswordResetWhereQuery>>>;
  _or?: Maybe<Array<Maybe<PasswordResetWhereQuery>>>;
  _not?: Maybe<PasswordResetWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  createdAt?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
  email?: Maybe<StringWhereQuery>;
  expiresAt?: Maybe<StringWhereQuery>;
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  todosCount: Scalars['Int'];
  authenticated: User;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};


export type QueryTodosArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  where?: Maybe<TodoWhereQuery>;
  orderBy?: Maybe<TodoQueryOrder>;
};


export type QueryTodosCountArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  where?: Maybe<TodoWhereQuery>;
};

export enum QueryOrder {
  Asc = 'asc',
  AscNullsLast = 'ascNullsLast',
  AscNullsFirst = 'ascNullsFirst',
  Desc = 'desc',
  DescNullsLast = 'descNullsLast',
  DescNullsFirst = 'descNullsFirst'
}

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Int'];
  user: User;
};

export type RequestPasswordResetInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  email: Scalars['String'];
  /**  The reset password token sent to user's email  */
  token: Scalars['String'];
  password: Scalars['String'];
};

export type StringWhereQuery = {
  _eq?: Maybe<Scalars['String']>;
  _ne?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _like?: Maybe<Scalars['String']>;
  _re?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _overlap?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _contained?: Maybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TodoQueryOrder = {
  createdAt?: Maybe<QueryOrder>;
  updatedAt?: Maybe<QueryOrder>;
};

export type TodoSubscriptionFilter = {
  id?: Maybe<IdWhereQuery>;
  createdAt?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
  title?: Maybe<StringWhereQuery>;
};

export type TodoWhereQuery = {
  _and?: Maybe<Array<Maybe<TodoWhereQuery>>>;
  _or?: Maybe<Array<Maybe<TodoWhereQuery>>>;
  _not?: Maybe<TodoWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  createdAt?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
  title?: Maybe<StringWhereQuery>;
};

export type UpdateTodoInput = {
  title?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

export type UserQueryOrder = {
  createdAt?: Maybe<QueryOrder>;
  updatedAt?: Maybe<QueryOrder>;
};

export type UserSubscriptionFilter = {
  id?: Maybe<IdWhereQuery>;
  createdAt?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
  email?: Maybe<StringWhereQuery>;
};

export type UserWhereQuery = {
  _and?: Maybe<Array<Maybe<UserWhereQuery>>>;
  _or?: Maybe<Array<Maybe<UserWhereQuery>>>;
  _not?: Maybe<UserWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  createdAt?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
  email?: Maybe<StringWhereQuery>;
};

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title?: Maybe<string>, createdAt?: Maybe<string> } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: Maybe<{ __typename?: 'Todo', id: string }> };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos?: Maybe<Array<Maybe<{ __typename?: 'Todo', id: string, title?: Maybe<string>, createdAt?: Maybe<string> }>>> };


export const CreateTodoDocument = gql`
    mutation createTodo($title: String!) {
  createTodo(object: {title: $title}) {
    id
    title
    createdAt
  }
}
    `;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    id
  }
}
    `;
export const TodosDocument = gql`
    query todos {
  todos {
    id
    title
    createdAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createTodo(variables: CreateTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTodoMutation>(CreateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTodo');
    },
    deleteTodo(variables: DeleteTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteTodoMutation>(DeleteTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteTodo');
    },
    todos(variables?: TodosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TodosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TodosQuery>(TodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'todos');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;