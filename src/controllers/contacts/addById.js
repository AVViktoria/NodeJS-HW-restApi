// const express = require('express')
// const router = express.Router()
const {addContact} = require('../../models/contacts/addContact');
const addById = async (req, res) => {
  const result = await addContact(req.body);
  res.status(200).json({
    status: 'created',
    code: 200,
    data: { result },
  });
};

// const addById = router.post('/', async (req, res, next) => {

//     const data = await addContact(req.body);
//     res.status(200).json({
//       status: "success",
//       code: 200,
//       data,
//     });
//   });

module.exports = addById;