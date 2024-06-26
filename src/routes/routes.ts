const express = require('express');
// getting views defined in controller
const { indexView,
        shopView,
        shopFilterView,
        aboutView,
        contactView,
        cartView,
        ordersView,
        addCart,
        buyCart,
        decreaseCart,
        emptyCart } = require('../controllers/controllers');

const router = express.Router();

router.get('/', indexView);
router.get('/shop', shopView);
router.get('/shop/:category', shopFilterView);
router.get('/about', aboutView);
router.get('/contact', contactView);
router.get('/cart', cartView);
router.post('/add_cart', addCart);
router.post('/empty_cart',emptyCart);
router.post('/decrease_cart', decreaseCart);
router.post('/buyCart', buyCart);
router.get('/orders', ordersView);

module.exports = router;