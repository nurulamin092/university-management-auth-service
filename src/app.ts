import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'
// import ApiError from './errors/ApiErrors'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes

app.use('/api/v1/user/', UserRoutes)

//testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working Successfully')
//   // throw new ApiError(400, 'ore re error khaisi')
//   // next('ore re error khaisi')
//   Promise.reject(new Error('UnHandle Promise Rejection'))
// })

app.use(globalErrorHandler)

export default app
