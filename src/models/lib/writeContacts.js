const fs = require('fs/promises');
const contactsPath = require('./contactsPath');

//   Functions  writeFile
async function  writeContacts (user) { 
  return await fs.writeFile(contactsPath, JSON.stringify(user));
};

module.exports = writeContacts();