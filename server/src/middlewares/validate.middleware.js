function validateMiddleware (schema) {
    function middlewareHandler(req,res,next) {
        const payload = req.body;
        const { error } = schema.validate(payload);
        if(error) {
            res.send(400).json({
                status: false,
                message: 'payload validation failed' 
                + error.details[0].message,
            })
        } else {
            next();
        }
    }
    return middlewareHandler;
}

module.exports = validateMiddleware;