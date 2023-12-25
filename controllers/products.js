const Product=require('../model/product');
exports.getAddProduct=(req,res,next) =>{
    
    res.render('add-product', {
        pageTitle: 'Addproduct',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};
exports.postAddProduct = (req,res, next) =>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts=(req, res, next) =>{
    const products= Product.fetchAll();
    res.renderr('shop',{
        prods:products,
        pageTitle: 'Shop',
        path:"/",
        hasProducts:products.length > 0,
        activeShop:true,
        prodctCSS: true
    });
};