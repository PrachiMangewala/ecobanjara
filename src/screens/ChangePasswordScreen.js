import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';

export default function ChangePasswordScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { error, userInfo } = userSignin;
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(false);

    useEffect(() => {
        if(userInfo){
            setPassword(userInfo.data.password? userInfo.data.password : "You haven't set any password")
        }
    }, [userInfo])

    const savePassword = () => {
        if(password !== confirmpassword){
            setMessage(true);
        }else{
            setMessage(false);
        }
    }

    return (error?
        <MessageBox>{error}</MessageBox>
        :
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} className='py-1 px-1'>
                <div style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                    <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                    <p className='connect' style={{color: "#000000"}}>Edit Profile</p>
                </div>
                    <p className='heading-dest' style={{color: "#9C9C9C", cursor:"pointer"}} onClick={savePassword}>Save</p>
            </div>
            <div>
                {message? 
                    <MessageBox>{"Your passwords don't match. Please enter your password again."}</MessageBox>
                    : ""
                }
            </div>
            <form className="signinform" style={{top:"0px"}}>
                <div className="form-group" style={{position: "relative"}}>
                    <label htmlFor="Password" style={{fontSize:"14px", marginBottom:"5px"}}>Enter new password</label>
                    <input style={{paddingLeft: "2rem"}} type="password" id="password"  className="form-control" placeholder="Create Password" 
                        onChange={ e => setPassword(e.target.value)}></input>
                    <i style={{top: "45px"}} className="fas fa-unlock font-icon"></i>
                </div>
                <div className="form-group" style={{position: "relative"}}>
                    <label htmlFor="Password" style={{fontSize:"14px", marginBottom:"5px"}}>Confirm password</label>
                    <input style={{paddingLeft: "2rem"}} type="password" id="confirmpassword"  className="form-control" placeholder="Confirm Password" 
                        onChange={ e => setConfirmPassword(e.target.value)}></input>
                    <i style={{top: "45px"}} className="fas fa-unlock font-icon"></i>
                </div>
            </form>
        </div>
    )
}
