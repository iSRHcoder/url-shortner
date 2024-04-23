import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const urlSchema = mongoose.Schema(
  {
    redirectUrl: {
      type: String,
      required: [true, 'Url is required'],
    },
    shortId: {
      type: String,
      required: true,
      default: () => nanoid(6),
    },
    visitHistory: [],
  },
  { timestamps: true },
);

const URL = mongoose.model('URL', urlSchema);

export default URL;
