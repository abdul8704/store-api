const express = require('express');
const router = express.Router();

const { getAllProducts, getOneProduct } = require("../controllers/products");

router.route('/').get(getAllProducts);
router.route('/:id').get(getOneProduct);

module.exports = router;