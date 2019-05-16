var errorBuilder = {
    createError: function(err, statusCode) {
        var error = {
            message: err,
            status: statusCode
        };

        return error
    }
};

module.exports = errorBuilder;