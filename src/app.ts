import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRoute from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes

console.log(process.env)

app.use('/api/v1/user/', usersRoute)

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
