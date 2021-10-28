const Joi = require('joi');

exports.validate = function (data) {
    const userValidationSchema = Joi.object({
      
        firstName: Joi.string ().min(3).max(30).required ().empty(''),
        lastName: Joi.string (). required ().empty(''),
        phoneNumber: Joi.string (). required ( ).empty(''),
        address: Joi.string (). required ().empty('') ,
        email: Joi.string (). email (). required ().empty(''),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        avatar: Joi.string (). required ().empty(''),
        role:Joi.string ().required ().empty('')
       
    });

    return userValidationSchema.validate(data);
}    