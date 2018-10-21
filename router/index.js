import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
import {saveInfo, fetchInfo} from '../controllers/info'
import {saveStudent, fetchStudent, fetchStudentDetail} from '../controllers/student'
import { saveCourse, fetchCourse } from '../controllers/course'
import { saveNews, fetchNews } from '../controllers/news'


import schema from '../graphql/schema'


const router = require('koa-router')()

router.post('/savesnews', saveNews)
        .get('/news', fetchNews)




router.post('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: schema})(ctx, next)
      })
      .get('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: schema})(ctx, next)
      })
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
      })

module.exports = router
