function validateMiddleware (schema, payload) {
    const { error } = schema.validate(payload);
    function middlewareHandler(req,res,next) {
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