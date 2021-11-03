import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
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

export type CreateProductInput = {
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  roles?: Maybe<Array<RoleString>>;
};

export type IdWhereQuery = {
  _contained?: Maybe<Scalars['ID']>;
  _contains?: Maybe<Scalars['ID']>;
  _eq?: Maybe<Scalars['ID']>;
  _gt?: Maybe<Scalars['ID']>;
  _gte?: Maybe<Scalars['ID']>;
  _ilike?: Maybe<Scalars['ID']>;
  _in?: Maybe<Array<Scalars['ID']>>;
  _like?: Maybe<Scalars['ID']>;
  _lt?: Maybe<Scalars['ID']>;
  _lte?: Maybe<Scalars['ID']>;
  _ne?: Maybe<Scalars['ID']>;
  _nin?: Maybe<Array<Scalars['ID']>>;
  _overlap?: Maybe<Scalars['ID']>;
  _re?: Maybe<Scalars['ID']>;
};

export type IntegerWhereQuery = {
  _contained?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _ilike?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _like?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _ne?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
  _overlap?: Maybe<Scalars['Int']>;
  _re?: Maybe<Scalars['Int']>;
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
  createManyProducts: Array<Maybe<Product>>;
  createManyUsers: Array<Maybe<User>>;
  createPaymentIntent: Scalars['String'];
  createProduct: Product;
  createUser: User;
  deleteManyProducts?: Maybe<Array<Maybe<Product>>>;
  deleteProduct?: Maybe<Product>;
  login: LoginResponse;
  register: RegisterResponse;
  requestPasswordReset: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  updateManyProducts: Array<Maybe<Product>>;
  updateManyUsers: Array<Maybe<User>>;
  updateProduct: Product;
  updateUser: User;
};


export type MutationCreateManyProductsArgs = {
  objects: Array<Maybe<CreateProductInput>>;
};


export type MutationCreateManyUsersArgs = {
  objects: Array<Maybe<CreateUserInput>>;
};


export type MutationCreatePaymentIntentArgs = {
  productCartItems: Array<Maybe<ProductCartItem>>;
};


export type MutationCreateProductArgs = {
  object: CreateProductInput;
};


export type MutationCreateUserArgs = {
  object: CreateUserInput;
};


export type MutationDeleteManyProductsArgs = {
  where?: Maybe<ProductWhereQuery>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
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


export type MutationUpdateManyProductsArgs = {
  object: UpdateProductInput;
  where: ProductWhereQuery;
};


export type MutationUpdateManyUsersArgs = {
  object: UpdateUserInput;
  where: UserWhereQuery;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  object: UpdateProductInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  object: UpdateUserInput;
};

export type PasswordReset = {
  __typename?: 'PasswordReset';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  expiresAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type PasswordResetQueryOrder = {
  createdAt?: Maybe<QueryOrder>;
  updatedAt?: Maybe<QueryOrder>;
};

export type PasswordResetSubscriptionFilter = {
  createdAt?: Maybe<StringWhereQuery>;
  email?: Maybe<StringWhereQuery>;
  expiresAt?: Maybe<StringWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
};

export type PasswordResetWhereQuery = {
  _and?: Maybe<Array<Maybe<PasswordResetWhereQuery>>>;
  _not?: Maybe<PasswordResetWhereQuery>;
  _or?: Maybe<Array<Maybe<PasswordResetWhereQuery>>>;
  createdAt?: Maybe<StringWhereQuery>;
  email?: Maybe<StringWhereQuery>;
  expiresAt?: Maybe<StringWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
};

export type Permission = {
  __typename?: 'Permission';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProductCartItem = {
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ProductQueryOrder = {
  createdAt?: Maybe<QueryOrder>;
  updatedAt?: Maybe<QueryOrder>;
};

export type ProductSubscriptionFilter = {
  createdAt?: Maybe<StringWhereQuery>;
  description?: Maybe<StringWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  image?: Maybe<StringWhereQuery>;
  name?: Maybe<StringWhereQuery>;
  price?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
};

export type ProductWhereQuery = {
  _and?: Maybe<Array<Maybe<ProductWhereQuery>>>;
  _not?: Maybe<ProductWhereQuery>;
  _or?: Maybe<Array<Maybe<ProductWhereQuery>>>;
  createdAt?: Maybe<StringWhereQuery>;
  description?: Maybe<StringWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  image?: Maybe<StringWhereQuery>;
  name?: Maybe<StringWhereQuery>;
  price?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
};

export type Query = {
  __typename?: 'Query';
  authenticated: User;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsCount: Scalars['Int'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProductQueryOrder>;
  where?: Maybe<ProductWhereQuery>;
};


export type QueryProductsCountArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereQuery>;
};

export enum QueryOrder {
  Asc = 'asc',
  AscNullsFirst = 'ascNullsFirst',
  AscNullsLast = 'ascNullsLast',
  Desc = 'desc',
  DescNullsFirst = 'descNullsFirst',
  DescNullsLast = 'descNullsLast'
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
  password: Scalars['String'];
  /**  The reset password token sent to user's email  */
  token: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  slug?: Maybe<Scalars['String']>;
};

export enum RoleString {
  Noob = 'NOOB'
}

export type StringWhereQuery = {
  _contained?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _ne?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _overlap?: Maybe<Scalars['String']>;
  _re?: Maybe<Scalars['String']>;
};

export type UpdateProductInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<RoleString>>;
};

export type User = {
  __typename?: 'User';
  allPermissions?: Maybe<Array<Maybe<Permission>>>;
  allRoles?: Maybe<Array<Maybe<Role>>>;
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  roles?: Maybe<Array<RoleString>>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserQueryOrder = {
  createdAt?: Maybe<QueryOrder>;
  updatedAt?: Maybe<QueryOrder>;
};

export type UserSubscriptionFilter = {
  allPermissions?: Maybe<StringWhereQuery>;
  allRoles?: Maybe<StringWhereQuery>;
  createdAt?: Maybe<StringWhereQuery>;
  email?: Maybe<StringWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  roles?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
};

export type UserWhereQuery = {
  _and?: Maybe<Array<Maybe<UserWhereQuery>>>;
  _not?: Maybe<UserWhereQuery>;
  _or?: Maybe<Array<Maybe<UserWhereQuery>>>;
  allPermissions?: Maybe<StringWhereQuery>;
  allRoles?: Maybe<StringWhereQuery>;
  createdAt?: Maybe<StringWhereQuery>;
  email?: Maybe<StringWhereQuery>;
  id?: Maybe<IdWhereQuery>;
  roles?: Maybe<StringWhereQuery>;
  updatedAt?: Maybe<StringWhereQuery>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, image?: string | null | undefined, name?: string | null | undefined, price?: string | null | undefined, description?: string | null | undefined } | null | undefined> | null | undefined };

export type CreatePaymentIntentMutationVariables = Exact<{
  productCartItems: Array<Maybe<ProductCartItem>> | Maybe<ProductCartItem>;
}>;


export type CreatePaymentIntentMutation = { __typename?: 'Mutation', createPaymentIntent: string };


export const ProductsDocument = `
    query Products {
  products {
    id
    image
    name
    price
    description
  }
}
    `;
export const useProductsQuery = <
      TData = ProductsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: ProductsQueryVariables,
      options?: UseQueryOptions<ProductsQuery, TError, TData>
    ) =>
    useQuery<ProductsQuery, TError, TData>(
      variables === undefined ? ['Products'] : ['Products', variables],
      fetcher<ProductsQuery, ProductsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ProductsDocument, variables),
      options
    );
export const CreatePaymentIntentDocument = `
    mutation createPaymentIntent($productCartItems: [ProductCartItem]!) {
  createPaymentIntent(productCartItems: $productCartItems)
}
    `;
export const useCreatePaymentIntentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreatePaymentIntentMutation, TError, CreatePaymentIntentMutationVariables, TContext>
    ) =>
    useMutation<CreatePaymentIntentMutation, TError, CreatePaymentIntentMutationVariables, TContext>(
      (variables?: CreatePaymentIntentMutationVariables) => fetcher<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreatePaymentIntentDocument, variables)(),
      options
    );