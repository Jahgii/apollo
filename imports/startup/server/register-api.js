import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import {makeExecutableSchema} from "graphql-tools";
import {createApolloServer} from "meteor/apollo";
import merge from 'lodash/merge';

import ResolutionsResolvers from "../../api/resolutions/resolvers";
//load testSchemas
//dsd
const testSchema =`
type Query {
  hi:String
  resolutions:[Resolutions]
}
`;

const typeDefs = [
  testSchema,
  ResolutionsSchema
];

const testResolvers = {
  Query:{
    hi(){
      return "hello World from METEOR via APOLLO";
    }
  }
};

const resolvers = merge(testResolvers, ResolutionsResolvers)

console.log(resolvers)

const schema = makeExecutableSchema({
typeDefs,
resolvers
});

createApolloServer({schema});
