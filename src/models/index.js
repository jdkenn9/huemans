// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ratings, Businesses, Users, Address } = initSchema(schema);

export {
  Ratings,
  Businesses,
  Users,
  Address
};