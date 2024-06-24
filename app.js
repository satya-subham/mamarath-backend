const express = require("express");
const CORS = require("cors");
const { allProductsRouter } = require("./routes/allProductsRouter");
const { homeRouter } = require("./routes/homeRouter");
const ErrorHandler = require("./utils/ErrorHandler");
const authRoute = require("./routes/authRoute");
const cookieParser = require("cookie-parser");

const getuserRoute = require("./routes/getUser");
const { faceProductRouter } = require("./routes/faceRouter");
const { hairProductRouter } = require("./routes/hairRouter");
const { makeupRouter } = require("./routes/makeupRouter");

const app = express();

app.use(cookieParser());
app.use(express.json());
const origins = {
  react: "https://react-mamaearth-clone.vercel.app/",
};
app.use(CORS({ origin: origins, credentials: true }));

app.use("/api/v1/home", homeRouter);
app.use("/api/v1/allproducts", allProductsRouter);
app.use("/api/v1/face", faceProductRouter);
app.use("/api/v1/hair", hairProductRouter);
app.use("/api/v1/makeup", makeupRouter);

// authentication routes
app.use("/api/v1/users", authRoute);
app.use("/api/v1/users/loggedInUser", getuserRoute);

app.use("*", (req, res, next) => {
  next({
    status: "not found",
    message: "path does not exist",
  });
});

app.use(ErrorHandler);

module.exports = {
  app,
};
