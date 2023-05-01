const express = require("express");
const router = express.Router();

const { check } = require('express-validator');


const {
  getProductById,
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,

} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");


router.param("userId", getUserById);
router.param("productId", getProductById);


router.post(
  "/product/create/:userId",    
  [check("title" , "title is required" ).notEmpty(),
  check("author" , "author is required").notEmpty()],
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);


router.get("/product/:productId", getProduct);
router.get("/products", getAllProducts);




router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);


router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);


module.exports = router;
