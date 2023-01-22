// const express = require('express')
// const router = express.Router()
const { getAllContacts } = require("../../models/index");

const getAll = async (req, res) => {
  const contacts = await getAllContacts();
  res.json({
    status: 'success',
    code: 200,
    data: { result: contacts },
  });
};

// const getAll = router.get("/", async (req, res, next) => {
//   // const {body} = req;
//   // const body = req.body;

//   const data = await getAllContacts();
//   // if (!data) {
//   //   const error = new Error("Not found");
//   //   error.status = 404;
//   //   throw error;
//   // }
//   res.status(200).json({
//     status: "success",
//     code: 200,
//     data,
//   });
// });

module.exports = getAll;
