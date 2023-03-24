/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createRatings = /* GraphQL */ `
  mutation CreateRatings(
    $input: CreateRatingsInput!
    $condition: ModelRatingsConditionInput
  ) {
    createRatings(input: $input, condition: $condition) {
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
export const updateRatings = /* GraphQL */ `
  mutation UpdateRatings(
    $input: UpdateRatingsInput!
    $condition: ModelRatingsConditionInput
  ) {
    updateRatings(input: $input, condition: $condition) {
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
export const deleteRatings = /* GraphQL */ `
  mutation DeleteRatings(
    $input: DeleteRatingsInput!
    $condition: ModelRatingsConditionInput
  ) {
    deleteRatings(input: $input, condition: $condition) {
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
export const createBusinesses = /* GraphQL */ `
  mutation CreateBusinesses(
    $input: CreateBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    createBusinesses(input: $input, condition: $condition) {
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
export const updateBusinesses = /* GraphQL */ `
  mutation UpdateBusinesses(
    $input: UpdateBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    updateBusinesses(input: $input, condition: $condition) {
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
export const deleteBusinesses = /* GraphQL */ `
  mutation DeleteBusinesses(
    $input: DeleteBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    deleteBusinesses(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
