import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


const CategorySchema = new Schema({
    code: String,
    name: String,
})

CategorySchema.pre('save', function (next) {

    next()
})

mongoose.model('Category', CategorySchema)