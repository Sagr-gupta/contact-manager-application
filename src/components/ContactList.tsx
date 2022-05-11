import React from "react";
// import { contacts } from "./Contacts";
import { contact } from "./models/models";
import ContactCard from "./ContactCard";

interface props {
  contacts: Array<contact>;
  getContactId: (id: string) => void;
}

const ContactList: React.FC<props> = ({ contacts, getContactId }) => {
  console.log(contacts);

  const deleteContactHandler = (id: string) => {
    getContactId(id);
  };
  const renderContactList = contacts.map((contact) => {
    // const {id,name,email} = contact;
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
