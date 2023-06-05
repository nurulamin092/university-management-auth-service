/* eslint-disable no-console */
import mongoose from 'mongoose'

import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'
async function bootstrap() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`database connect successfully`)
    server = app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`Failed to connect database ${err}`)
  }

  process.on('unhandledRejection', error => {
    console.log('UnHandle Rejection is detected, we are closing our server....')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
bootstrap()
