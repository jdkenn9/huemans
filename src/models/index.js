// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notes, Ratings, Businesses, Users, Addresses } = initSchema(schema);

export {
  Notes,
  Ratings,
  Businesses,
  Users,
  Addresses
};