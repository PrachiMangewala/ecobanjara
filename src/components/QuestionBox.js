import React from 'react'
import { useState } from 'react';

export default function QuestionBox() {
    const [status, setStatus] = useState(false);
    const showFaQ = () => {
        setStatus(!status);
    }
    return (
        <div style={{backgroundColor: "#ffffff", padding:"3px 8px", borderRadius:"10px"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
                <p style={{color: "#000000", marginLeft: "0", fontSize:"1rem"}}>Question</p>
                <p><i className="fas fa-chevron-down" style={{ fontSize: "1.2rem", color: "#067FD2", cursor:"pointer" }} onClick={showFaQ}></i></p>
            </div>
            {
                status?
                <div style={{paddingBottom:"5px"}}>Answer</div>
                : ""
            }
        </div>
    )
}
