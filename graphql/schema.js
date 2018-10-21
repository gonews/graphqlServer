import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {category} from './category'
import {news} from './news'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      news,
      category
    }
  })
})
