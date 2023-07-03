const router = require("express").Router();
const {
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

router.get('/', getProducts);

router.post('/', saveProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;