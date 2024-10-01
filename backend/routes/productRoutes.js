import express from "express";
import { authToken } from "../middlewares/auth.js";
import {
  allProductsOfThatCategory,
  editProduct,
  getAllProduct,
  getProductById,
  getProductsBySearch,
  oneProductFromEachCategory,
  uploadProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/upload-product", authToken, uploadProduct);
router.get("/all-product", authToken, getAllProduct);
router.post("/update-product", authToken, editProduct);
router.get("/category-product", oneProductFromEachCategory);
router.post("/products-by-category", allProductsOfThatCategory);
router.post("/product-details", getProductById);


// search Product using query
router.get("/search", getProductsBySearch)
export default router;
