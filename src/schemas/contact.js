const Joi = require('joi');
// const numberPattern =
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;


const contactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2}),
  phone: Joi.string().min(9).max(11).required()
  // pattern(numberPattern)
  ,
});

module.exports = contactSchema;