import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
 <tr>
   <td>{props.messages}</td>
 </tr>
);

export default function MessagesList() {
 const [messages, setMessages] = useState([]);

 // This method fetches the records from the database.
 useEffect(() => {
   async function getMessages() {
     const response = await fetch(`http://localhost:5000/messages/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const messages = await response.json();
     setMessages(messages);
   }

   getMessages();

   return;
 }, [messages.length]);


 // This following section will display the Message.
 return (
   <div>
       <h1 messages={messages}>messages</h1>
   </div>
 );
}