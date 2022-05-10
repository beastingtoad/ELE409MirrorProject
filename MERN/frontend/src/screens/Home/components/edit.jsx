import React, { useEffect, useState } from "react";
import axios from "axios";
import {Button, Input} from "@mui/material";



export default function Edit() {
    const startup = {
    ['_id']: ' ',
    ['text']: ' '
    };
    const [msg, setMsg] = useState([startup]);
    // This method fetches the Message from the database.
    const fetchMesg = async() =>{
        try{
        const {data} = await axios.get('messages/');
        setMsg(data);
        } catch(e) {
             console.error('didnt connect');
            setMsg({ _id: "", text: "Failed To Connect To db" });
        }
    }

    // this is used to update the db with a change to the message
    const setMesg = async() => {
        let text = document.getElementById('input').value;
         let key = msg._id;
         try {
             await axios.put('messages/update/' + {key}, {"text": text})
         }catch(e) {
            console.error('didnt put');
        }
    }

    useEffect(() => {
        fetchMesg();
    },[]);

    // This following section will display the editer Message.
    return (
        <div>
             <h3 style={{color: "#FFF", margin: 10 }} > Message on Screen:</h3>
            <h5 style={{color: "#FFF", margin: 10 }} key={msg._id}> {msg.text} </h5>
          <>
              <br/>
              <br/>
              <br/>
              <br/>
          </>
          <h3>Change Message To:</h3>
        <Input type="text" name="input" id="input" onChange={setMesg}/>
        <Button onClick={setMesg}>Update</Button>
        </div>
    );
}
