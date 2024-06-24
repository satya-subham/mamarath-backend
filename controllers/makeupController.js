const { MakeupProducts } = require("../models/makeupModel");
const ApiErrorHandler = require("../utils/ApiErrorHandler");
const WrapperHandler = require("../utils/WrapperHandler");

const getMakeupProducts = WrapperHandler(async (req, res, next) => {
  const products = await MakeupProducts.find({});

  if (products.length === 0) {
    return next(new ApiErrorHandler("No products found", 404));
  }

  res.status(200).send({
    message: "Products Fetched Successfully",
    products,
    count: products.length,
  });
});

module.exports = {
  getMakeupProducts,
};
