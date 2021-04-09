const UNHANDLED_ERROR = 'Internal Error';
const UNHANDLED_ERROR_STATUS = 500;

const handleError = (err, _req, res, _next) => {
  if (!err.payload) {
    res.status(UNHANDLED_ERROR_STATUS)
      .json({ error: UNHANDLED_ERROR });
  }
  res.status(err.error.status)
    .json(err.payload);
};

module.exports = {
  handleError,
};
