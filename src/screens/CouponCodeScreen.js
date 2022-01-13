import React, { useState } from 'react'

export default function CouponCodeScreen() {
    const [code, setCode] = useState();
    return (
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Enter coupon code</p>
            </div>
            <div>
                <form className="signinform" style={{top:"0"}}>
                    <div className="form-group">
                        <input type="text" id="code"  className="form-control" placeholder="Enter coupon code" 
                        style={{backgroundColor: "#ffffff", border:"1px solid #D1D1D1", borderRadius:"16px", minHeight:"4rem"}} onChange={ e => setCode(e.target.value)}></input>
                        <div className="apply">APPLY</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
