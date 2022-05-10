import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "@mui/material";


export default function Messages() {
    const [msg, setMsg] = useState([])

    const fetchMesg = async() =>{
        const {data} = await axios.get('messages/');
        setMsg(data);
        console.log(data);
    }

    // This method fetches the records from the database.
    useEffect(() => {
        fetchMesg();
    },[]);

    // This following section will display the Message.
    return (
        <div>
            {msg &&
                msg
                    .map((msg) => (
                        <h1 style={{color: "#FFF",backgroundColor: "#000", margin: 10 }} key={msg._id}>{msg.text} </h1>))}
        </div>
    );
}
