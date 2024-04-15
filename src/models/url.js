import mongoose from 'mongoose';
import shortId from 'shortid';

const urlSchema = mongoose.Schema(
  {
    redirectUrl: {
      type: String,
      required: [true, 'Url is required'],
    },
    shortId: {
      type: String,
      required: true,
      default: shortId.generate(),
    },
    visitHistory: [],
  },
  { timestamps: true },
);

const URL = mongoose.model('URL', urlSchema);

export default URL;
