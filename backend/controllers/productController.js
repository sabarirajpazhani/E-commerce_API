const ProductModel = require('../models/productModel');

exports.getProducts = async(req, res, next)=>{

    const products = await ProductModel.find({})


    res.json({
        Sucees: true,
        products
    })
}

exports.getSingleProduct = (req, res, next)=>{
    res.json({
        Sucees: true,
        message: 'Get Single Product Working!'
    })
}