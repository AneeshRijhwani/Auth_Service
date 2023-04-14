const validateUserAuth = (req,res, next)=>{
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went Wrong',
            err: 'Email or password missing in the request'
        })
    }
    next();
}

const validateAdminRequest = (req,res,next)=>{
    if (!req.body.id) {
        return res.status(400).json({
            success: false,
            data: {},
            err: 'UserId not given',
            message: 'Something went wrong'
        });
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateAdminRequest
}