const fs = require('fs/promises');
const contactsPath = require('./contactsPath');


//   Functions  readFile 
async function  getContactsList() {
  return JSON.parse(await fs.readFile(contactsPath, "utf8"));
};

module.exports = getContactsList();