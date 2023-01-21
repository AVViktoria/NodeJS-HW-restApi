//* req(request, запрос) - объект, содержит всю информацию о запросе, 
//* например  url, method, header, тело, хуки и т.д.
//* res(response, ответ) - объект, который позволяет настроить и отправить ответ
//*  например  часть разметки   res.send('<h2>Contacts page</h2>')


const express = require('express');
const router = express.Router();

// or like that it's same
// const {Router} =require('express');
// const router = Router();

const {
  getAll,
  getById,
  addById,
  deleteById,
  updateById,
} = require("../../controllers/contacts");
// const { contacts } = require('../../controllers/contacts');

router.get('/', getAll);
router.get('/:contactId', getById);
router.post('/', addById);
router.delete('/:contactId', deleteById);
router.put('/:contactId', updateById);

// router.get('/', async (req, res, next) => {
//   res.json({ message: 'Get Hello World!' })
// })

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'Get ID Hello World!' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'Post Hello World!' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'Delete Hello World!' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'Put Hello World!' })
// })

module.exports = router;
