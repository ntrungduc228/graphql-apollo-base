import { mergeResolvers } from '@graphql-tools/merge'
import { resolvers as authorResolvers } from './author'

export default mergeResolvers([authorResolvers]);