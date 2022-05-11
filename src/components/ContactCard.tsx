import React from "react";
// import { contact } from "./models/models";
import user from "../images/user.jpg";

interface props {
  clickHandler: (id: string) => void;
  contact: {
    id: string;
    name: string;
    email: string;
  };
}

const ContactCard: React.FC<props> = ({ contact, clickHandler }) => {
  console.log(contact);
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => clickHandler(contact.id)}
      ></i>
    </div>
  );
};

export default ContactCard;
