import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerAddresses = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly PostalCode?: number | null;
}

type LazyAddresses = {
  readonly Street?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly PostalCode?: number | null;
}

export declare type Addresses = LazyLoading extends LazyLoadingDisabled ? EagerAddresses : LazyAddresses

export declare const Addresses: (new (init: ModelInit<Addresses>) => Addresses)

type EagerRatings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ratings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Rating?: number | null;
  readonly Review?: string | null;
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
  readonly Name?: string | null;
  readonly Address?: Addresses | null;
  readonly Hours?: string | null;
  readonly BusinessImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Businesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: Addresses | null;
  readonly Hours?: string | null;
  readonly BusinessImage?: string | null;
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
  readonly UserName?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Birthday?: string | null;
  readonly ProfileImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserName?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Birthday?: string | null;
  readonly ProfileImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notes = LazyLoading extends LazyLoadingDisabled ? EagerNotes : LazyNotes

export declare const Notes: (new (init: ModelInit<Notes>) => Notes) & {
  copyOf(source: Notes, mutator: (draft: MutableModel<Notes>) => MutableModel<Notes> | void): Notes;
}

type EagerLogos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Logos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BigLogo?: string | null;
  readonly SmallLogo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLogos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Logos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BigLogo?: string | null;
  readonly SmallLogo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Logos = LazyLoading extends LazyLoadingDisabled ? EagerLogos : LazyLogos

export declare const Logos: (new (init: ModelInit<Logos>) => Logos) & {
  copyOf(source: Logos, mutator: (draft: MutableModel<Logos>) => MutableModel<Logos> | void): Logos;
}