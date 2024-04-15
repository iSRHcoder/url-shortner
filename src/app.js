import express from 'express';
import cors from 'cors';
import urlRouter from './routes/urlRoutes.js';
const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', urlRouter);

export default app;
