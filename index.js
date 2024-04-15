import app from './src/app.js';
import 'dotenv/config';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log('DB connection failed', err);
  });

app.listen(PORT, () => {
  console.log('server has been started on:', PORT);
});
