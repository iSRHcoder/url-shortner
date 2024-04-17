import URL from '../models/url.js';

export const getShortUrl = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const url = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: { timeStamp: new Date().toLocaleString() },
        },
        $inc: {
          clicks: 1,
        },
      },
      { new: true },
    );

    if (!url) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    res.status(200).json({ redirectUrl: url.redirectUrl });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

export const createShortUrl = async (req, res) => {
  try {
    const redirectUrl = req.body.inputUrl;
    if (!redirectUrl) {
      return res.status(400).json({
        error: 'input Url is required',
      });
    }

    await URL.create({
      redirectUrl: redirectUrl,
    });

    return res.status(201).json({
      message: 'url shorten successfully',
      url: redirectUrl,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

export const getUrls = async (req, res) => {
  try {
    const url = await URL.find();

    res.status(200).json({
      urls: url,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
