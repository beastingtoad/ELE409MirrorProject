import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "@mui/material";


export default function MessagesList() {
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
                        <Card style={{ margin: 10 }} key={msg._id}>{msg.name} </Card>))}
        </div>
    );
}
