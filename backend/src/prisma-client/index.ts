// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  gameHistory: (where?: GameHistoryWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  gameHistory: (
    where: GameHistoryWhereUniqueInput
  ) => GameHistoryNullablePromise;
  gameHistories: (args?: {
    where?: GameHistoryWhereInput;
    orderBy?: GameHistoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<GameHistory>;
  gameHistoriesConnection: (args?: {
    where?: GameHistoryWhereInput;
    orderBy?: GameHistoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => GameHistoryConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createGameHistory: (data: GameHistoryCreateInput) => GameHistoryPromise;
  updateGameHistory: (args: {
    data: GameHistoryUpdateInput;
    where: GameHistoryWhereUniqueInput;
  }) => GameHistoryPromise;
  updateManyGameHistories: (args: {
    data: GameHistoryUpdateManyMutationInput;
    where?: GameHistoryWhereInput;
  }) => BatchPayloadPromise;
  upsertGameHistory: (args: {
    where: GameHistoryWhereUniqueInput;
    create: GameHistoryCreateInput;
    update: GameHistoryUpdateInput;
  }) => GameHistoryPromise;
  deleteGameHistory: (where: GameHistoryWhereUniqueInput) => GameHistoryPromise;
  deleteManyGameHistories: (
    where?: GameHistoryWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  gameHistory: (
    where?: GameHistorySubscriptionWhereInput
  ) => GameHistorySubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type GameHistoryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "score_ASC"
  | "score_DESC"
  | "date_ASC"
  | "date_DESC"
  | "userId_ASC"
  | "userId_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "score_ASC"
  | "score_DESC"
  | "gamesCount_ASC"
  | "gamesCount_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type GameHistoryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface GameHistoryWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  score?: Maybe<Int>;
  score_not?: Maybe<Int>;
  score_in?: Maybe<Int[] | Int>;
  score_not_in?: Maybe<Int[] | Int>;
  score_lt?: Maybe<Int>;
  score_lte?: Maybe<Int>;
  score_gt?: Maybe<Int>;
  score_gte?: Maybe<Int>;
  date?: Maybe<DateTimeInput>;
  date_not?: Maybe<DateTimeInput>;
  date_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  date_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  date_lt?: Maybe<DateTimeInput>;
  date_lte?: Maybe<DateTimeInput>;
  date_gt?: Maybe<DateTimeInput>;
  date_gte?: Maybe<DateTimeInput>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<ID_Input>;
  userId_not?: Maybe<ID_Input>;
  userId_in?: Maybe<ID_Input[] | ID_Input>;
  userId_not_in?: Maybe<ID_Input[] | ID_Input>;
  userId_lt?: Maybe<ID_Input>;
  userId_lte?: Maybe<ID_Input>;
  userId_gt?: Maybe<ID_Input>;
  userId_gte?: Maybe<ID_Input>;
  userId_contains?: Maybe<ID_Input>;
  userId_not_contains?: Maybe<ID_Input>;
  userId_starts_with?: Maybe<ID_Input>;
  userId_not_starts_with?: Maybe<ID_Input>;
  userId_ends_with?: Maybe<ID_Input>;
  userId_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<GameHistoryWhereInput[] | GameHistoryWhereInput>;
  OR?: Maybe<GameHistoryWhereInput[] | GameHistoryWhereInput>;
  NOT?: Maybe<GameHistoryWhereInput[] | GameHistoryWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  score?: Maybe<Int>;
  score_not?: Maybe<Int>;
  score_in?: Maybe<Int[] | Int>;
  score_not_in?: Maybe<Int[] | Int>;
  score_lt?: Maybe<Int>;
  score_lte?: Maybe<Int>;
  score_gt?: Maybe<Int>;
  score_gte?: Maybe<Int>;
  gamesCount?: Maybe<Int>;
  gamesCount_not?: Maybe<Int>;
  gamesCount_in?: Maybe<Int[] | Int>;
  gamesCount_not_in?: Maybe<Int[] | Int>;
  gamesCount_lt?: Maybe<Int>;
  gamesCount_lte?: Maybe<Int>;
  gamesCount_gt?: Maybe<Int>;
  gamesCount_gte?: Maybe<Int>;
  gamesHistory_every?: Maybe<GameHistoryWhereInput>;
  gamesHistory_some?: Maybe<GameHistoryWhereInput>;
  gamesHistory_none?: Maybe<GameHistoryWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface GameHistoryCreateInput {
  id?: Maybe<ID_Input>;
  score: Int;
  date: DateTimeInput;
  user: UserCreateOneWithoutGamesHistoryInput;
  userId?: Maybe<ID_Input>;
}

export interface UserCreateOneWithoutGamesHistoryInput {
  create?: Maybe<UserCreateWithoutGamesHistoryInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutGamesHistoryInput {
  id?: Maybe<ID_Input>;
  name: String;
  score: Int;
  gamesCount: Int;
}

export interface GameHistoryUpdateInput {
  score?: Maybe<Int>;
  date?: Maybe<DateTimeInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutGamesHistoryInput>;
  userId?: Maybe<ID_Input>;
}

export interface UserUpdateOneRequiredWithoutGamesHistoryInput {
  create?: Maybe<UserCreateWithoutGamesHistoryInput>;
  update?: Maybe<UserUpdateWithoutGamesHistoryDataInput>;
  upsert?: Maybe<UserUpsertWithoutGamesHistoryInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutGamesHistoryDataInput {
  name?: Maybe<String>;
  score?: Maybe<Int>;
  gamesCount?: Maybe<Int>;
}

export interface UserUpsertWithoutGamesHistoryInput {
  update: UserUpdateWithoutGamesHistoryDataInput;
  create: UserCreateWithoutGamesHistoryInput;
}

export interface GameHistoryUpdateManyMutationInput {
  score?: Maybe<Int>;
  date?: Maybe<DateTimeInput>;
  userId?: Maybe<ID_Input>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  score: Int;
  gamesCount: Int;
  gamesHistory?: Maybe<GameHistoryCreateManyWithoutUserInput>;
}

export interface GameHistoryCreateManyWithoutUserInput {
  create?: Maybe<
    GameHistoryCreateWithoutUserInput[] | GameHistoryCreateWithoutUserInput
  >;
  connect?: Maybe<GameHistoryWhereUniqueInput[] | GameHistoryWhereUniqueInput>;
}

export interface GameHistoryCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  score: Int;
  date: DateTimeInput;
  userId?: Maybe<ID_Input>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  score?: Maybe<Int>;
  gamesCount?: Maybe<Int>;
  gamesHistory?: Maybe<GameHistoryUpdateManyWithoutUserInput>;
}

export interface GameHistoryUpdateManyWithoutUserInput {
  create?: Maybe<
    GameHistoryCreateWithoutUserInput[] | GameHistoryCreateWithoutUserInput
  >;
  delete?: Maybe<GameHistoryWhereUniqueInput[] | GameHistoryWhereUniqueInput>;
  connect?: Maybe<GameHistoryWhereUniqueInput[] | GameHistoryWhereUniqueInput>;
  set?: Maybe<GameHistoryWhereUniqueInput[] | GameHistoryWhereUniqueInput>;
  disconnect?: Maybe<
    GameHistoryWhereUniqueInput[] | GameHistoryWhereUniqueInput
  >;
  update?: Maybe<
    | GameHistoryUpdateWithWhereUniqueWithoutUserInput[]
    | GameHistoryUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | GameHistoryUpsertWithWhereUniqueWithoutUserInput[]
    | GameHistoryUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<
    GameHistoryScalarWhereInput[] | GameHistoryScalarWhereInput
  >;
  updateMany?: Maybe<
    | GameHistoryUpdateManyWithWhereNestedInput[]
    | GameHistoryUpdateManyWithWhereNestedInput
  >;
}

export interface GameHistoryUpdateWithWhereUniqueWithoutUserInput {
  where: GameHistoryWhereUniqueInput;
  data: GameHistoryUpdateWithoutUserDataInput;
}

export interface GameHistoryUpdateWithoutUserDataInput {
  score?: Maybe<Int>;
  date?: Maybe<DateTimeInput>;
  userId?: Maybe<ID_Input>;
}

export interface GameHistoryUpsertWithWhereUniqueWithoutUserInput {
  where: GameHistoryWhereUniqueInput;
  update: GameHistoryUpdateWithoutUserDataInput;
  create: GameHistoryCreateWithoutUserInput;
}

export interface GameHistoryScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  score?: Maybe<Int>;
  score_not?: Maybe<Int>;
  score_in?: Maybe<Int[] | Int>;
  score_not_in?: Maybe<Int[] | Int>;
  score_lt?: Maybe<Int>;
  score_lte?: Maybe<Int>;
  score_gt?: Maybe<Int>;
  score_gte?: Maybe<Int>;
  date?: Maybe<DateTimeInput>;
  date_not?: Maybe<DateTimeInput>;
  date_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  date_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  date_lt?: Maybe<DateTimeInput>;
  date_lte?: Maybe<DateTimeInput>;
  date_gt?: Maybe<DateTimeInput>;
  date_gte?: Maybe<DateTimeInput>;
  userId?: Maybe<ID_Input>;
  userId_not?: Maybe<ID_Input>;
  userId_in?: Maybe<ID_Input[] | ID_Input>;
  userId_not_in?: Maybe<ID_Input[] | ID_Input>;
  userId_lt?: Maybe<ID_Input>;
  userId_lte?: Maybe<ID_Input>;
  userId_gt?: Maybe<ID_Input>;
  userId_gte?: Maybe<ID_Input>;
  userId_contains?: Maybe<ID_Input>;
  userId_not_contains?: Maybe<ID_Input>;
  userId_starts_with?: Maybe<ID_Input>;
  userId_not_starts_with?: Maybe<ID_Input>;
  userId_ends_with?: Maybe<ID_Input>;
  userId_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<GameHistoryScalarWhereInput[] | GameHistoryScalarWhereInput>;
  OR?: Maybe<GameHistoryScalarWhereInput[] | GameHistoryScalarWhereInput>;
  NOT?: Maybe<GameHistoryScalarWhereInput[] | GameHistoryScalarWhereInput>;
}

export interface GameHistoryUpdateManyWithWhereNestedInput {
  where: GameHistoryScalarWhereInput;
  data: GameHistoryUpdateManyDataInput;
}

export interface GameHistoryUpdateManyDataInput {
  score?: Maybe<Int>;
  date?: Maybe<DateTimeInput>;
  userId?: Maybe<ID_Input>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  score?: Maybe<Int>;
  gamesCount?: Maybe<Int>;
}

export interface GameHistorySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<GameHistoryWhereInput>;
  AND?: Maybe<
    GameHistorySubscriptionWhereInput[] | GameHistorySubscriptionWhereInput
  >;
  OR?: Maybe<
    GameHistorySubscriptionWhereInput[] | GameHistorySubscriptionWhereInput
  >;
  NOT?: Maybe<
    GameHistorySubscriptionWhereInput[] | GameHistorySubscriptionWhereInput
  >;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface GameHistory {
  id: ID_Output;
  score: Int;
  date: DateTimeOutput;
  userId?: ID_Output;
}

export interface GameHistoryPromise extends Promise<GameHistory>, Fragmentable {
  id: () => Promise<ID_Output>;
  score: () => Promise<Int>;
  date: () => Promise<DateTimeOutput>;
  user: <T = UserPromise>() => T;
  userId: () => Promise<ID_Output>;
}

export interface GameHistorySubscription
  extends Promise<AsyncIterator<GameHistory>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  score: () => Promise<AsyncIterator<Int>>;
  date: () => Promise<AsyncIterator<DateTimeOutput>>;
  user: <T = UserSubscription>() => T;
  userId: () => Promise<AsyncIterator<ID_Output>>;
}

export interface GameHistoryNullablePromise
  extends Promise<GameHistory | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  score: () => Promise<Int>;
  date: () => Promise<DateTimeOutput>;
  user: <T = UserPromise>() => T;
  userId: () => Promise<ID_Output>;
}

export interface User {
  id: ID_Output;
  name: String;
  score: Int;
  gamesCount: Int;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  score: () => Promise<Int>;
  gamesCount: () => Promise<Int>;
  gamesHistory: <T = FragmentableArray<GameHistory>>(args?: {
    where?: GameHistoryWhereInput;
    orderBy?: GameHistoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  score: () => Promise<AsyncIterator<Int>>;
  gamesCount: () => Promise<AsyncIterator<Int>>;
  gamesHistory: <T = Promise<AsyncIterator<GameHistorySubscription>>>(args?: {
    where?: GameHistoryWhereInput;
    orderBy?: GameHistoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  score: () => Promise<Int>;
  gamesCount: () => Promise<Int>;
  gamesHistory: <T = FragmentableArray<GameHistory>>(args?: {
    where?: GameHistoryWhereInput;
    orderBy?: GameHistoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface GameHistoryConnection {
  pageInfo: PageInfo;
  edges: GameHistoryEdge[];
}

export interface GameHistoryConnectionPromise
  extends Promise<GameHistoryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<GameHistoryEdge>>() => T;
  aggregate: <T = AggregateGameHistoryPromise>() => T;
}

export interface GameHistoryConnectionSubscription
  extends Promise<AsyncIterator<GameHistoryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GameHistoryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGameHistorySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface GameHistoryEdge {
  node: GameHistory;
  cursor: String;
}

export interface GameHistoryEdgePromise
  extends Promise<GameHistoryEdge>,
    Fragmentable {
  node: <T = GameHistoryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface GameHistoryEdgeSubscription
  extends Promise<AsyncIterator<GameHistoryEdge>>,
    Fragmentable {
  node: <T = GameHistorySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateGameHistory {
  count: Int;
}

export interface AggregateGameHistoryPromise
  extends Promise<AggregateGameHistory>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGameHistorySubscription
  extends Promise<AsyncIterator<AggregateGameHistory>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface GameHistorySubscriptionPayload {
  mutation: MutationType;
  node: GameHistory;
  updatedFields: String[];
  previousValues: GameHistoryPreviousValues;
}

export interface GameHistorySubscriptionPayloadPromise
  extends Promise<GameHistorySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = GameHistoryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = GameHistoryPreviousValuesPromise>() => T;
}

export interface GameHistorySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GameHistorySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GameHistorySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = GameHistoryPreviousValuesSubscription>() => T;
}

export interface GameHistoryPreviousValues {
  id: ID_Output;
  score: Int;
  date: DateTimeOutput;
  userId?: ID_Output;
}

export interface GameHistoryPreviousValuesPromise
  extends Promise<GameHistoryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  score: () => Promise<Int>;
  date: () => Promise<DateTimeOutput>;
  userId: () => Promise<ID_Output>;
}

export interface GameHistoryPreviousValuesSubscription
  extends Promise<AsyncIterator<GameHistoryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  score: () => Promise<AsyncIterator<Int>>;
  date: () => Promise<AsyncIterator<DateTimeOutput>>;
  userId: () => Promise<AsyncIterator<ID_Output>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  score: Int;
  gamesCount: Int;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  score: () => Promise<Int>;
  gamesCount: () => Promise<Int>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  score: () => Promise<AsyncIterator<Int>>;
  gamesCount: () => Promise<AsyncIterator<Int>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "GameHistory",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/maxime-soulard-80dc97/spotify-blindtest/dev`
});
export const prisma = new Prisma();
