const getContactsList = require('./getContactsList');
const writeContacts = require('./writeContacts');
const { randomUUID } = require("crypto");


const addContact = async (body) => {
  try {
    const contacts = await getContactsList();
  const newContact = {id: randomUUID(), ...body};

  // пушим новый контакт
  contacts.push(newContact);
  
  // перезаписываем файл
  await writeContacts(contacts);
  return newContact;
  
  } catch (err) {
    return console.log(err.message);
  }
  }

  module.exports = addContact;