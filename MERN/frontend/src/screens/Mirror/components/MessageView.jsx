import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Messages() {
    const [msg, setMsg] = useState([])

    const fetchMesg = async() =>{
        const {data} = await axios.get('messages/');
        setMsg(data);
    }

    // This method fetches the records from the database.
    useEffect(() => {
        fetchMesg();

        const interval=setInterval(()=>{
            fetchMesg()
        },10000)
        return()=>clearInterval(interval)


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
