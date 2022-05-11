import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
// import { contact } from "./models/models";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

interface contact {
  id: string;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const LOCAL_STORAGE_KEY: string = "contacts";

  const [contacts, setContacts] = useState<contact[]>([]);

  const addContactHandler = (contact: contact) => {
    console.log(contact);
    setContacts([...contacts, { ...contact, id: uuid() }]);
  };

  const removeContactHandler = (id: string) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || ""
    );
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
};

export default App;
