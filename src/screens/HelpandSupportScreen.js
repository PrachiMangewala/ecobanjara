import React, { useState } from 'react'
import QuestionBox from '../components/QuestionBox';

export default function HelpandSupportScreen() {
    const [status, setStatus] = useState(false);
    const showFaQ = () => {
        setStatus(!status);
    }
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }} className='py-1 px-1'>
                <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Help & Support</p>
            </div>
            <div style={{backgroundColor: "#f6f6f6", height:"100vh"}} className='py-1 px-1'>
                <div>
                    <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
                        <p className='connect' style={{color: "#000000", marginLeft: "0"}}>FAQ's</p>
                        <p><i className="fas fa-chevron-down" style={{ fontSize: "1.2rem", cursor:"pointer", paddingRight:"8px" }} onClick={showFaQ}></i></p>
                    </div>
                    <div>
                        {status?
                        <div>
                            <QuestionBox></QuestionBox>
                        </div>
                        : ""}
                    </div>
                    <div>
                        <p className='connect' style={{color: "#000000", marginLeft: "0"}}>Send your queries</p>  
                        <button className='sign-up-btn' style={{backgroundColor: "#f6f6f6"}}>
                            <img src={process.env.PUBLIC_URL +  "/images/gmail.png"} alt="gmail" style={{marginRight: "1rem"}}></img>
                            <a href="mailto:namaste@triponvo.com"><div style={{marginLeft:"80px"}}>E-mail us</div></a>
                        </button>
                        <button className='sign-up-btn' style={{backgroundColor: "#f6f6f6"}}>
                            <img src={process.env.PUBLIC_URL +  "/images/whatsapp.png"} alt="whatsapp" style={{marginRight: "1rem"}}></img>
                            <a href="https://wa.me/+919999513080"><div style={{marginLeft:"80px"}}>Whatsapp us</div></a>
                        </button>  
                    </div>
                    </div>
                    <div style={{position:"absolute", width:"90%", bottom: "10px"}}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
                            <p className='connect' style={{color: "#000000", marginLeft: "0"}}>Terms & Conditions</p>
                            <p><i className="fas fa-chevron-right" style={{ fontSize: "1.2rem" }}></i></p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
                            <p className='connect' style={{color: "#000000", marginLeft: "0"}}>Privacy Policy</p>
                            <p><i className="fas fa-chevron-right" style={{ fontSize: "1.2rem" }}></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
