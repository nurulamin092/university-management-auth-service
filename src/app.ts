// import express, { Application, NextFunction, Request, Response } from 'express'
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes

app.use('/api/v1/', routes);

//testing
// app.use('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing error log')
// })

app.use(globalErrorHandler);
//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMassage: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

export default app;
