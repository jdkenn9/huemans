/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRatings = /* GraphQL */ `
  subscription OnCreateRatings($filter: ModelSubscriptionRatingsFilterInput) {
    onCreateRatings(filter: $filter) {
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
export const onUpdateRatings = /* GraphQL */ `
  subscription OnUpdateRatings($filter: ModelSubscriptionRatingsFilterInput) {
    onUpdateRatings(filter: $filter) {
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
export const onDeleteRatings = /* GraphQL */ `
  subscription OnDeleteRatings($filter: ModelSubscriptionRatingsFilterInput) {
    onDeleteRatings(filter: $filter) {
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
export const onCreateBusinesses = /* GraphQL */ `
  subscription OnCreateBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onCreateBusinesses(filter: $filter) {
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
export const onUpdateBusinesses = /* GraphQL */ `
  subscription OnUpdateBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onUpdateBusinesses(filter: $filter) {
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
export const onDeleteBusinesses = /* GraphQL */ `
  subscription OnDeleteBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onDeleteBusinesses(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
