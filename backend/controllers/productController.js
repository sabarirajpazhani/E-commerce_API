exports.getProducts = (req, res, next)=>{
    res.json({
        Sucees: true,
        message: 'Get Productss Working!'
    })
}

exports.getSingleProduct = (req, res, next)=>{
    res.json({
        Sucees: true,
        message: 'Get Single Product Working!'
    })
}