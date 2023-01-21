// const express = require("express");
// const router = express.Router();
const { updateContact } = require("../../models/contacts/updateContact");
const createError = require('http-errors');

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) {
    throw createError(404, `Product with ID=${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result },
  });
};
// const updateById = router.put("/:contactId", async (req, res, next) => {
//   // const body = req.body;
//   const { contactId } = req.params;
//   const data = await updateContact(contactId, req.body);
//   // const data = await updateContact();
//   if (!data) {
//     return res.status(404).json({
//       status: "error",
//       code: 404,
//       message: "Not found",
//     });
//   }

//   if(!req.body){
//     return res.status(400).json({
//       status: "error",
//       code: 400,
//       message: "missing fields",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     code: 200,
//     data,
//   });
// });

module.exports = updateById;