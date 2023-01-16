const express = require('express')
const router = express.Router()
const { getAllContacts } = require("../../models/contacts/getAllContacts");


const getAll = router.get("/", async (req, res, next) => {
  // const {body} = req;
  // const {body} = req.body;

  const data = await getAllContacts();
  // if (!data) {
  //   const error = new Error("Not found");
  //   error.status = 404;
  //   throw error;
  // }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      contacts: data,
    },
  });
});

module.exports = getAll;
