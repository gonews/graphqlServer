
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    isOutputType
} from 'graphql';

import mongoose from 'mongoose'
const Category = mongoose.model('category')

export let CategoryType = new GraphQLObjectType({
    name: 'category',
    fields: {
        _id: {
            type: GraphQLID
        },
        code: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    }
})


export const categorys = {
    type: new GraphQLList(CategoryType),
    args: {},
    resolve (root, params, options) {
        return Info.find({}).exec()
    }
}


export const category = {
    type: CategoryType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, options) {
        return Category.findOne({
            _id: params.id
        }).exec()
    }
}
