import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ArticleIdInput = {
  id?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<UploadFile>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  members?: Maybe<Array<Maybe<Member>>>;
};


export type ArticleImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ArticleCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ArticleMembersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  values?: Maybe<Array<Maybe<Article>>>;
  groupBy?: Maybe<ArticleGroupBy>;
  aggregate?: Maybe<ArticleAggregator>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  _id?: Maybe<Array<Maybe<ArticleConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ArticleConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleConnectionUpdatedAt>>>;
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnection_Id = {
  __typename?: 'ArticleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionCreatedAt = {
  __typename?: 'ArticleConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionUpdatedAt = {
  __typename?: 'ArticleConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionSlug = {
  __typename?: 'ArticleConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleInput = {
  content?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleInput = {
  content?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateArticleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleInput>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
  article?: Maybe<Article>;
  writer?: Maybe<Member>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  values?: Maybe<Array<Maybe<Comment>>>;
  groupBy?: Maybe<CommentGroupBy>;
  aggregate?: Maybe<CommentAggregator>;
};

export type CommentAggregator = {
  __typename?: 'CommentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  id?: Maybe<Array<Maybe<CommentConnectionId>>>;
  _id?: Maybe<Array<Maybe<CommentConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<CommentConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<CommentConnectionUpdatedAt>>>;
  content?: Maybe<Array<Maybe<CommentConnectionContent>>>;
  article?: Maybe<Array<Maybe<CommentConnectionArticle>>>;
  writer?: Maybe<Array<Maybe<CommentConnectionWriter>>>;
  published_at?: Maybe<Array<Maybe<CommentConnectionPublished_At>>>;
};

export type CommentConnectionId = {
  __typename?: 'CommentConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnection_Id = {
  __typename?: 'CommentConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionCreatedAt = {
  __typename?: 'CommentConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionUpdatedAt = {
  __typename?: 'CommentConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionContent = {
  __typename?: 'CommentConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionArticle = {
  __typename?: 'CommentConnectionArticle';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionWriter = {
  __typename?: 'CommentConnectionWriter';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionPublished_At = {
  __typename?: 'CommentConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentInput = {
  content?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['ID']>;
  writer?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCommentInput = {
  content?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['ID']>;
  writer?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCommentInput = {
  data?: Maybe<CommentInput>;
};

export type CreateCommentPayload = {
  __typename?: 'createCommentPayload';
  comment?: Maybe<Comment>;
};

export type UpdateCommentInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCommentInput>;
};

export type UpdateCommentPayload = {
  __typename?: 'updateCommentPayload';
  comment?: Maybe<Comment>;
};

export type DeleteCommentInput = {
  where?: Maybe<InputId>;
};

export type DeleteCommentPayload = {
  __typename?: 'deleteCommentPayload';
  comment?: Maybe<Comment>;
};

export type Member = {
  __typename?: 'Member';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  user?: Maybe<UsersPermissionsUser>;
  picture?: Maybe<Array<Maybe<UploadFile>>>;
  articles?: Maybe<Array<Maybe<Article>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};


export type MemberPictureArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type MemberArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type MemberCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MemberConnection = {
  __typename?: 'MemberConnection';
  values?: Maybe<Array<Maybe<Member>>>;
  groupBy?: Maybe<MemberGroupBy>;
  aggregate?: Maybe<MemberAggregator>;
};

export type MemberAggregator = {
  __typename?: 'MemberAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MemberGroupBy = {
  __typename?: 'MemberGroupBy';
  id?: Maybe<Array<Maybe<MemberConnectionId>>>;
  _id?: Maybe<Array<Maybe<MemberConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MemberConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MemberConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<MemberConnectionName>>>;
  email?: Maybe<Array<Maybe<MemberConnectionEmail>>>;
  profile?: Maybe<Array<Maybe<MemberConnectionProfile>>>;
  user?: Maybe<Array<Maybe<MemberConnectionUser>>>;
};

export type MemberConnectionId = {
  __typename?: 'MemberConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnection_Id = {
  __typename?: 'MemberConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionCreatedAt = {
  __typename?: 'MemberConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionUpdatedAt = {
  __typename?: 'MemberConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionName = {
  __typename?: 'MemberConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionEmail = {
  __typename?: 'MemberConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionProfile = {
  __typename?: 'MemberConnectionProfile';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionUser = {
  __typename?: 'MemberConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  picture?: Maybe<Array<Maybe<Scalars['ID']>>>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMemberInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  picture?: Maybe<Array<Maybe<Scalars['ID']>>>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMemberInput = {
  data?: Maybe<MemberInput>;
};

export type CreateMemberPayload = {
  __typename?: 'createMemberPayload';
  member?: Maybe<Member>;
};

export type UpdateMemberInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMemberInput>;
};

export type UpdateMemberPayload = {
  __typename?: 'updateMemberPayload';
  member?: Maybe<Member>;
};

export type DeleteMemberInput = {
  where?: Maybe<InputId>;
};

export type DeleteMemberPayload = {
  __typename?: 'deleteMemberPayload';
  member?: Maybe<Member>;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  chefId?: Maybe<Scalars['String']>;
};

export type RestaurantConnection = {
  __typename?: 'RestaurantConnection';
  values?: Maybe<Array<Maybe<Restaurant>>>;
  groupBy?: Maybe<RestaurantGroupBy>;
  aggregate?: Maybe<RestaurantAggregator>;
};

export type RestaurantAggregator = {
  __typename?: 'RestaurantAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RestaurantGroupBy = {
  __typename?: 'RestaurantGroupBy';
  id?: Maybe<Array<Maybe<RestaurantConnectionId>>>;
  _id?: Maybe<Array<Maybe<RestaurantConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<RestaurantConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<RestaurantConnectionUpdatedAt>>>;
  chefId?: Maybe<Array<Maybe<RestaurantConnectionChefId>>>;
};

export type RestaurantConnectionId = {
  __typename?: 'RestaurantConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnection_Id = {
  __typename?: 'RestaurantConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionCreatedAt = {
  __typename?: 'RestaurantConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionUpdatedAt = {
  __typename?: 'RestaurantConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantConnectionChefId = {
  __typename?: 'RestaurantConnectionChefId';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RestaurantConnection>;
};

export type RestaurantInput = {
  chefId?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRestaurantInput = {
  chefId?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRestaurantInput = {
  data?: Maybe<RestaurantInput>;
};

export type CreateRestaurantPayload = {
  __typename?: 'createRestaurantPayload';
  restaurant?: Maybe<Restaurant>;
};

export type UpdateRestaurantInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRestaurantInput>;
};

export type UpdateRestaurantPayload = {
  __typename?: 'updateRestaurantPayload';
  restaurant?: Maybe<Restaurant>;
};

export type DeleteRestaurantInput = {
  where?: Maybe<InputId>;
};

export type DeleteRestaurantPayload = {
  __typename?: 'deleteRestaurantPayload';
  restaurant?: Maybe<Restaurant>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Article | ArticleConnection | ArticleAggregator | ArticleGroupBy | ArticleConnectionId | ArticleConnection_Id | ArticleConnectionCreatedAt | ArticleConnectionUpdatedAt | ArticleConnectionContent | ArticleConnectionTitle | ArticleConnectionSlug | CreateArticlePayload | UpdateArticlePayload | DeleteArticlePayload | Comment | CommentConnection | CommentAggregator | CommentGroupBy | CommentConnectionId | CommentConnection_Id | CommentConnectionCreatedAt | CommentConnectionUpdatedAt | CommentConnectionContent | CommentConnectionArticle | CommentConnectionWriter | CommentConnectionPublished_At | CreateCommentPayload | UpdateCommentPayload | DeleteCommentPayload | Member | MemberConnection | MemberAggregator | MemberGroupBy | MemberConnectionId | MemberConnection_Id | MemberConnectionCreatedAt | MemberConnectionUpdatedAt | MemberConnectionName | MemberConnectionEmail | MemberConnectionProfile | MemberConnectionUser | CreateMemberPayload | UpdateMemberPayload | DeleteMemberPayload | Restaurant | RestaurantConnection | RestaurantAggregator | RestaurantGroupBy | RestaurantConnectionId | RestaurantConnection_Id | RestaurantConnectionCreatedAt | RestaurantConnectionUpdatedAt | RestaurantConnectionChefId | CreateRestaurantPayload | UpdateRestaurantPayload | DeleteRestaurantPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsConnection?: Maybe<CommentConnection>;
  member?: Maybe<Member>;
  members?: Maybe<Array<Maybe<Member>>>;
  membersConnection?: Maybe<MemberConnection>;
  restaurant?: Maybe<Restaurant>;
  restaurants?: Maybe<Array<Maybe<Restaurant>>>;
  restaurantsConnection?: Maybe<RestaurantConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  articleBySlug?: Maybe<Array<Maybe<Article>>>;
  commentsInArticles?: Maybe<Array<Maybe<Comment>>>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCommentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMemberArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMembersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMembersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRestaurantArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRestaurantsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRestaurantsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticleBySlugArgs = {
  slug?: Maybe<Scalars['String']>;
};


export type QueryCommentsInArticlesArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticlePayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  createComment?: Maybe<CreateCommentPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  createMember?: Maybe<CreateMemberPayload>;
  updateMember?: Maybe<UpdateMemberPayload>;
  deleteMember?: Maybe<DeleteMemberPayload>;
  createRestaurant?: Maybe<CreateRestaurantPayload>;
  updateRestaurant?: Maybe<UpdateRestaurantPayload>;
  deleteRestaurant?: Maybe<DeleteRestaurantPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  addMyComment?: Maybe<Comment>;
  attachRestaurantToChef: Scalars['String'];
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};


export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};


export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};


export type MutationCreateCommentArgs = {
  input?: Maybe<CreateCommentInput>;
};


export type MutationUpdateCommentArgs = {
  input?: Maybe<UpdateCommentInput>;
};


export type MutationDeleteCommentArgs = {
  input?: Maybe<DeleteCommentInput>;
};


export type MutationCreateMemberArgs = {
  input?: Maybe<CreateMemberInput>;
};


export type MutationUpdateMemberArgs = {
  input?: Maybe<UpdateMemberInput>;
};


export type MutationDeleteMemberArgs = {
  input?: Maybe<DeleteMemberInput>;
};


export type MutationCreateRestaurantArgs = {
  input?: Maybe<CreateRestaurantInput>;
};


export type MutationUpdateRestaurantArgs = {
  input?: Maybe<UpdateRestaurantInput>;
};


export type MutationDeleteRestaurantArgs = {
  input?: Maybe<DeleteRestaurantInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationAddMyCommentArgs = {
  content?: Maybe<Scalars['String']>;
  article?: Maybe<ArticleIdInput>;
};


export type MutationAttachRestaurantToChefArgs = {
  id?: Maybe<Scalars['ID']>;
  chefID?: Maybe<Scalars['ID']>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = (
  { __typename?: 'Query' }
  & { articles?: Maybe<Array<Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content'>
  )>>> }
);

export type GetArticleCommentsQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type GetArticleCommentsQuery = (
  { __typename?: 'Query' }
  & { commentsInArticles?: Maybe<Array<Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'content'>
  )>>> }
);

export type CreateArticleMutationVariables = Exact<{
  input?: Maybe<CreateArticleInput>;
}>;


export type CreateArticleMutation = (
  { __typename?: 'Mutation' }
  & { createArticle?: Maybe<(
    { __typename?: 'createArticlePayload' }
    & { article?: Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id'>
    )> }
  )> }
);

export type GetCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { comments?: Maybe<Array<Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'content'>
  )>>> }
);

export type AddMyCommentMutationVariables = Exact<{
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
}>;


export type AddMyCommentMutation = (
  { __typename?: 'Mutation' }
  & { addMyComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'content'>
    & { article?: Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'title'>
    )> }
  )> }
);


export const GetArticlesDocument = gql`
    query getArticles {
  articles {
    id
    title
    content
  }
}
    `;

/**
 * __useGetArticlesQuery__
 *
 * To run a query within a React component, call `useGetArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
        return Apollo.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, baseOptions);
      }
export function useGetArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
          return Apollo.useLazyQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, baseOptions);
        }
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>;
export type GetArticlesLazyQueryHookResult = ReturnType<typeof useGetArticlesLazyQuery>;
export type GetArticlesQueryResult = Apollo.QueryResult<GetArticlesQuery, GetArticlesQueryVariables>;
export const GetArticleCommentsDocument = gql`
    query getArticleComments($id: String) {
  commentsInArticles(id: $id) {
    content
  }
}
    `;

/**
 * __useGetArticleCommentsQuery__
 *
 * To run a query within a React component, call `useGetArticleCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleCommentsQuery(baseOptions?: Apollo.QueryHookOptions<GetArticleCommentsQuery, GetArticleCommentsQueryVariables>) {
        return Apollo.useQuery<GetArticleCommentsQuery, GetArticleCommentsQueryVariables>(GetArticleCommentsDocument, baseOptions);
      }
export function useGetArticleCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleCommentsQuery, GetArticleCommentsQueryVariables>) {
          return Apollo.useLazyQuery<GetArticleCommentsQuery, GetArticleCommentsQueryVariables>(GetArticleCommentsDocument, baseOptions);
        }
export type GetArticleCommentsQueryHookResult = ReturnType<typeof useGetArticleCommentsQuery>;
export type GetArticleCommentsLazyQueryHookResult = ReturnType<typeof useGetArticleCommentsLazyQuery>;
export type GetArticleCommentsQueryResult = Apollo.QueryResult<GetArticleCommentsQuery, GetArticleCommentsQueryVariables>;
export const CreateArticleDocument = gql`
    mutation createArticle($input: createArticleInput) {
  createArticle(input: $input) {
    article {
      id
    }
  }
}
    `;
export type CreateArticleMutationFn = Apollo.MutationFunction<CreateArticleMutation, CreateArticleMutationVariables>;

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArticleMutation, { data, loading, error }] = useCreateArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArticleMutation(baseOptions?: Apollo.MutationHookOptions<CreateArticleMutation, CreateArticleMutationVariables>) {
        return Apollo.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, baseOptions);
      }
export type CreateArticleMutationHookResult = ReturnType<typeof useCreateArticleMutation>;
export type CreateArticleMutationResult = Apollo.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = Apollo.BaseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>;
export const GetCommentsDocument = gql`
    query getComments {
  comments {
    id
    content
  }
}
    `;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions?: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, baseOptions);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, baseOptions);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const AddMyCommentDocument = gql`
    mutation addMyComment($content: String, $id: String) {
  addMyComment(content: $content, article: {id: $id}) {
    content
    article {
      title
    }
  }
}
    `;
export type AddMyCommentMutationFn = Apollo.MutationFunction<AddMyCommentMutation, AddMyCommentMutationVariables>;

/**
 * __useAddMyCommentMutation__
 *
 * To run a mutation, you first call `useAddMyCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMyCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMyCommentMutation, { data, loading, error }] = useAddMyCommentMutation({
 *   variables: {
 *      content: // value for 'content'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddMyCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddMyCommentMutation, AddMyCommentMutationVariables>) {
        return Apollo.useMutation<AddMyCommentMutation, AddMyCommentMutationVariables>(AddMyCommentDocument, baseOptions);
      }
export type AddMyCommentMutationHookResult = ReturnType<typeof useAddMyCommentMutation>;
export type AddMyCommentMutationResult = Apollo.MutationResult<AddMyCommentMutation>;
export type AddMyCommentMutationOptions = Apollo.BaseMutationOptions<AddMyCommentMutation, AddMyCommentMutationVariables>;