import mongoose from 'mongoose'

const Category = mongoose.model('Category')

export const saveCategory = async (ctx, next) => {
    const opts = ctx.request.body

    const category = new Category(opts)
    const saveCategory = await category.save()
    console.log(saveCategory)

    if (saveCategory) {
        ctx.body = {
            success: true,
            data: saveCategory
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

export const fetchCategory = async (ctx, next) => {

    const categorys = await Category.find({})

    if (categorys.length) {
        ctx.body = {
            success: true,
            data: categorys
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}