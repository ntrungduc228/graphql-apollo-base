import { mergeTypeDefs } from '@graphql-tools/merge'
import { typeDefs as authorTypeDefs } from './author'

export default mergeTypeDefs([authorTypeDefs]);