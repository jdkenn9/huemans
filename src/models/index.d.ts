import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";



type EagerAddress = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly PostalCode?: number | null;
}

type LazyAddress = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly PostalCode?: number | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerRatings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ratings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Rating?: number | null;
  readonly Review?: string | null;
  readonly DateLeft?: string | null;
  readonly businessesID: string;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRatings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ratings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Rating?: number | null;
  readonly Review?: string | null;
  readonly DateLeft?: string | null;
  readonly businessesID: string;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ratings = LazyLoading extends LazyLoadingDisabled ? EagerRatings : LazyRatings

export declare const Ratings: (new (init: ModelInit<Ratings>) => Ratings) & {
  copyOf(source: Ratings, mutator: (draft: MutableModel<Ratings>) => MutableModel<Ratings> | void): Ratings;
}

type EagerBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Businesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usersID: string;
  readonly Owner?: string | null;
  readonly Name?: string | null;
  readonly BusinessesOwned: Users;
  readonly TotalReviews?: number | null;
  readonly Rating?: number | null;
  readonly Address?: Address | null;
  readonly Hours?: string | null;
  readonly BusinessRatings?: (Ratings | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Businesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usersID: string;
  readonly Owner?: string | null;
  readonly Name?: string | null;
  readonly BusinessesOwned: AsyncItem<Users>;
  readonly TotalReviews?: number | null;
  readonly Rating?: number | null;
  readonly Address?: Address | null;
  readonly Hours?: string | null;
  readonly BusinessRatings: AsyncCollection<Ratings>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Businesses = LazyLoading extends LazyLoadingDisabled ? EagerBusinesses : LazyBusinesses

export declare const Businesses: (new (init: ModelInit<Businesses>) => Businesses) & {
  copyOf(source: Businesses, mutator: (draft: MutableModel<Businesses>) => MutableModel<Businesses> | void): Businesses;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly UsersBusinesses?: (Businesses | null)[] | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Birthday?: string | null;
  readonly DateJoined?: string | null;
  readonly ReviewsWritten?: number | null;
  readonly Owner?: boolean | null;
  readonly UserRatings?: (Ratings | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly UsersBusinesses: AsyncCollection<Businesses>;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Birthday?: string | null;
  readonly DateJoined?: string | null;
  readonly ReviewsWritten?: number | null;
  readonly Owner?: boolean | null;
  readonly UserRatings: AsyncCollection<Ratings>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}