import React, { useEffect, useState } from "react";
import axios from "axios";
import {Button, Input} from "@mui/material";
import Messages from "../../Mirror/components/MessageView";


export default function Edit() {
    const [msg, setMsg] = useState([]);

    // This method fetches the Message from the database.
    const fetchMesg = async() =>{
        const {data} = await axios.get('messages/');
        setMsg(data);
        console.log(data);
    }

    // this is used to update the db with a change to the message
    const setMesg = async(text) => {
         let key = msg._id;
      await axios.put('messages/update/'+{key},{"text":text})
    }

    useEffect(() => {
        fetchMesg();
    },[]);

    // This following section will display the editer Message.
    return (
        <div>{msg &&
                msg
                    .map((msg) => (
             <h3 style={{color: "#FFF", margin: 10 }} key={msg._id}> Message on Screen:
                 <br/>{msg.text} </h3>))}
          <>
              <br/>
              <br/>
              <br/>
              <br/>
          </>
          <h3>Change Message To:</h3>
        <Input type="text"/>
        <Button onClick={setMesg.bind()}>Update</Button>
        </div>
    );
}
