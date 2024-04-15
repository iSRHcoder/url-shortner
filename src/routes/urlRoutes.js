import express from 'express';
import {
  createShortUrl,
  getShortUrl,
  getUrls,
} from '../controllers/urlControllers.js';

const urlRouter = express.Router();

urlRouter.route('/url/:shortId').get(getShortUrl);
urlRouter.route('/url').get(getUrls).post(createShortUrl);

export default urlRouter;
