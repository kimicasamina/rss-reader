export const ErrorHandler = (err, req, res, next) => {
  console.log("Middleware Error Handling");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: err.stack,
    // stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
};
