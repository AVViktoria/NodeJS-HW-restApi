const getContactsList = require('../lib/getContactsList');

async function getAllContacts() {
  try {
    const contacts =await getContactsList();
    return contacts;
  } catch (err) {
    return console.log(err.message);
  }
  };

  module.exports = getAllContacts();