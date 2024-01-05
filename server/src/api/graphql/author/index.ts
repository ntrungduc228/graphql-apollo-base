import { Query } from './query.resolver';
import { Mutation } from './mutation.resolver';
import { loadFilesSync } from '@graphql-tools/load-files'

const typeDefs = loadFilesSync(__dirname, { extensions: ['graphql', 'gql'] });

const resolvers = {
	Query, Mutation
};

export {
	typeDefs,
	resolvers
};
