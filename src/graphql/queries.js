/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRatings = /* GraphQL */ `
  query GetRatings($id: ID!) {
    getRatings(id: $id) {
      id
      Rating
      Review
      DateLeft
      usersID
      businessesID
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Rating
        Review
        DateLeft
        usersID
        businessesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBusinesses = /* GraphQL */ `
  query GetBusinesses($id: ID!) {
    getBusinesses(id: $id) {
      id
      Name
      Owner
      Rating
      TotalReviews
      Hours
      Address {
        Street
        City
        State
        PostalCode
      }
      BusinessRatings {
        items {
          id
          Rating
          Review
          DateLeft
          usersID
          businessesID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Owner
        Rating
        TotalReviews
        Hours
        Address {
          Street
          City
          State
          PostalCode
        }
        BusinessRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      UserName
      FirstName
      LastName
      Email
      Phone
      Birthday
      Owner
      UsersRatings {
        items {
          id
          Rating
          Review
          DateLeft
          usersID
          businessesID
          createdAt
          updatedAt
        }
        nextToken
      }
      OwnedBusinesses {
        id
        Name
        Owner
        Rating
        TotalReviews
        Hours
        Address {
          Street
          City
          State
          PostalCode
        }
        BusinessRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      usersOwnedBusinessesId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        Owner
        UsersRatings {
          nextToken
        }
        OwnedBusinesses {
          id
          Name
          Owner
          Rating
          TotalReviews
          Hours
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        usersOwnedBusinessesId
      }
      nextToken
    }
  }
`;
export const ratingsByUsersID = /* GraphQL */ `
  query RatingsByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Rating
        Review
        DateLeft
        usersID
        businessesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ratingsByBusinessesID = /* GraphQL */ `
  query RatingsByBusinessesID(
    $businessesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByBusinessesID(
      businessesID: $businessesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Rating
        Review
        DateLeft
        usersID
        businessesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
