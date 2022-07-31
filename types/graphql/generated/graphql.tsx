import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "ratings" */
  delete_ratings?: Maybe<Ratings_Mutation_Response>;
  /** delete single row from the table: "ratings" */
  delete_ratings_by_pk?: Maybe<Ratings>;
  /** insert data into the table: "ratings" */
  insert_ratings?: Maybe<Ratings_Mutation_Response>;
  /** insert a single row into the table: "ratings" */
  insert_ratings_one?: Maybe<Ratings>;
  /** update data of the table: "ratings" */
  update_ratings?: Maybe<Ratings_Mutation_Response>;
  /** update single row of the table: "ratings" */
  update_ratings_by_pk?: Maybe<Ratings>;
};


/** mutation root */
export type Mutation_RootDelete_RatingsArgs = {
  where: Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ratings_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_RatingsArgs = {
  objects: Array<Ratings_Insert_Input>;
  on_conflict?: InputMaybe<Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ratings_OneArgs = {
  object: Ratings_Insert_Input;
  on_conflict?: InputMaybe<Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_RatingsArgs = {
  _inc?: InputMaybe<Ratings_Inc_Input>;
  _set?: InputMaybe<Ratings_Set_Input>;
  where: Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ratings_By_PkArgs = {
  _inc?: InputMaybe<Ratings_Inc_Input>;
  _set?: InputMaybe<Ratings_Set_Input>;
  pk_columns: Ratings_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ratings" */
  ratings: Array<Ratings>;
  /** fetch aggregated fields from the table: "ratings" */
  ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "ratings" using primary key columns */
  ratings_by_pk?: Maybe<Ratings>;
};


export type Query_RootRatingsArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Query_RootRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Query_RootRatings_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "ratings" */
export type Ratings = {
  __typename?: 'ratings';
  comment?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  rate: Scalars['Int'];
  reviewer: Scalars['String'];
};

/** aggregated selection of "ratings" */
export type Ratings_Aggregate = {
  __typename?: 'ratings_aggregate';
  aggregate?: Maybe<Ratings_Aggregate_Fields>;
  nodes: Array<Ratings>;
};

/** aggregate fields of "ratings" */
export type Ratings_Aggregate_Fields = {
  __typename?: 'ratings_aggregate_fields';
  avg?: Maybe<Ratings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ratings_Max_Fields>;
  min?: Maybe<Ratings_Min_Fields>;
  stddev?: Maybe<Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Ratings_Sum_Fields>;
  var_pop?: Maybe<Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Ratings_Var_Samp_Fields>;
  variance?: Maybe<Ratings_Variance_Fields>;
};


/** aggregate fields of "ratings" */
export type Ratings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ratings_Avg_Fields = {
  __typename?: 'ratings_avg_fields';
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ratings". All fields are combined with a logical 'AND'. */
export type Ratings_Bool_Exp = {
  _and?: InputMaybe<Array<Ratings_Bool_Exp>>;
  _not?: InputMaybe<Ratings_Bool_Exp>;
  _or?: InputMaybe<Array<Ratings_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  rate?: InputMaybe<Int_Comparison_Exp>;
  reviewer?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ratings" */
export enum Ratings_Constraint {
  /** unique or primary key constraint on columns "id" */
  RatingsPkey = 'ratings_pkey',
  /** unique or primary key constraint on columns "reviewer" */
  RatingsReviewerKey = 'ratings_reviewer_key'
}

/** input type for incrementing numeric columns in table "ratings" */
export type Ratings_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  rate?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ratings" */
export type Ratings_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  rate?: InputMaybe<Scalars['Int']>;
  reviewer?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ratings_Max_Fields = {
  __typename?: 'ratings_max_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  reviewer?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ratings_Min_Fields = {
  __typename?: 'ratings_min_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  reviewer?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ratings" */
export type Ratings_Mutation_Response = {
  __typename?: 'ratings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ratings>;
};

/** on_conflict condition type for table "ratings" */
export type Ratings_On_Conflict = {
  constraint: Ratings_Constraint;
  update_columns?: Array<Ratings_Update_Column>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};

/** Ordering options when selecting data from "ratings". */
export type Ratings_Order_By = {
  comment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  reviewer?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ratings */
export type Ratings_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ratings" */
export enum Ratings_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id',
  /** column name */
  Rate = 'rate',
  /** column name */
  Reviewer = 'reviewer'
}

/** input type for updating data in table "ratings" */
export type Ratings_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  rate?: InputMaybe<Scalars['Int']>;
  reviewer?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ratings_Stddev_Fields = {
  __typename?: 'ratings_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ratings_Stddev_Pop_Fields = {
  __typename?: 'ratings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ratings_Stddev_Samp_Fields = {
  __typename?: 'ratings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Ratings_Sum_Fields = {
  __typename?: 'ratings_sum_fields';
  id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
};

/** update columns of table "ratings" */
export enum Ratings_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id',
  /** column name */
  Rate = 'rate',
  /** column name */
  Reviewer = 'reviewer'
}

/** aggregate var_pop on columns */
export type Ratings_Var_Pop_Fields = {
  __typename?: 'ratings_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ratings_Var_Samp_Fields = {
  __typename?: 'ratings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ratings_Variance_Fields = {
  __typename?: 'ratings_variance_fields';
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "ratings" */
  ratings: Array<Ratings>;
  /** fetch aggregated fields from the table: "ratings" */
  ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "ratings" using primary key columns */
  ratings_by_pk?: Maybe<Ratings>;
};


export type Subscription_RootRatingsArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Subscription_RootRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Subscription_RootRatings_By_PkArgs = {
  id: Scalars['Int'];
};

export type GetRatingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRatingsQuery = { __typename?: 'query_root', ratings: Array<{ __typename?: 'ratings', id: number, reviewer: string, comment?: string | null, rate: number }> };


export const GetRatingsDocument = gql`
    query getRatings {
  ratings {
    id
    reviewer
    comment
    rate
  }
}
    `;

/**
 * __useGetRatingsQuery__
 *
 * To run a query within a React component, call `useGetRatingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRatingsQuery(baseOptions?: Apollo.QueryHookOptions<GetRatingsQuery, GetRatingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRatingsQuery, GetRatingsQueryVariables>(GetRatingsDocument, options);
      }
export function useGetRatingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRatingsQuery, GetRatingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRatingsQuery, GetRatingsQueryVariables>(GetRatingsDocument, options);
        }
export type GetRatingsQueryHookResult = ReturnType<typeof useGetRatingsQuery>;
export type GetRatingsLazyQueryHookResult = ReturnType<typeof useGetRatingsLazyQuery>;
export type GetRatingsQueryResult = Apollo.QueryResult<GetRatingsQuery, GetRatingsQueryVariables>;