import express from 'express'
import { UserController } from './user.controller'
const route = express.Router()

route.post('/create-user', UserController.createUser)

export const UserRoutes = route
