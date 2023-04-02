// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ratings, Businesses, Users, Notes, Logos, Addresses } = initSchema(schema);

export {
  Ratings,
  Businesses,
  Users,
  Notes,
  Logos,
  Addresses
};