const express = require("express");
const router = express.Router();
const { getContactById } = require("../../models/contacts/getContactById");

const getById = router.get("/:contactId", async (req, res, next) => {
  // const body = req.body;
  const { contactId } = req.params;
  const data = await getContactById(contactId);
  if (!data) {
    return res.status(404).json({ error: "Not Found" });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data,
  });
});


module.exports = getById;
