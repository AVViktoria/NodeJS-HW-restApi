// const express = require("express");
// const router = express.Router();
const { getContactById } = require("../../models/index");
const createError = require('http-errors');

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) {
    throw createError(404, `Product with ID=${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result: contact },
  });
};
// const getById = router.get("/:contactId", async (req, res, next) => {
//   // const body = req.body;
//   const { contactId } = req.params;
//   const data = await getContactById(contactId);
//   if (!data) {
//     return res.status(404).json({ error: "Not Found" });
//   }
//   res.status(200).json({
//     status: "success",
//     code: 200,
//     data,
//   });
// });


module.exports = getById;
