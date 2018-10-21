import mongoose from 'mongoose'

const News = mongoose.model('News')

export const saveNews = async (ctx, next) => {
    const opts = ctx.request.body

    const news = new News(opts)
    const saveNews = await news.save()

    if (saveNews) {
        ctx.body = {
            success: true,
            data: saveNews
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

export const fetchNews = async (ctx, next) => {
    const news = await News.find({})
    if (news.length) {
        ctx.body = {
            success: true,
            data: news
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

