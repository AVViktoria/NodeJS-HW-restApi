const getContactsList = require('./getContactsList');

const getAllContacts = async () => {
  try {
    const contacts = await getContactsList();
    return contacts;
  } catch (err) {
    return console.log(err.message);
  }
  };

  module.exports = getAllContacts;
