import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    isOutputType,
    GraphQLInt
} from 'graphql';
import {CategoryType} from './category';

import mongoose from 'mongoose'
const News = mongoose.model('News')

const objType = new GraphQLObjectType({
    name: 'meta',
    fields: {
        createdAt: {
            type: GraphQLString
        },
        updatedAt: {
            type: GraphQLString
        }
    }
})

let NewsType = new GraphQLObjectType({
    name: 'News',
    fields: {
        _id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        shortContent: {
            type: GraphQLString
        },
        author: {
            type: GraphQLString
        },
        headImg:{
            type: GraphQLString
        },
        category:{
            type:GraphQLString
        },
        meta: {
            type: objType
        }
    }
})


export const news = {
    type: new GraphQLList(NewsType),
    args: {},
    resolve (root, params, options) {
        return News.find({}).exec()
    }
}
