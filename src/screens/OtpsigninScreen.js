import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useDispatch, useSelector } from 'react-redux';
import { Otpsignin } from '../actions/userActions';


export default function OtpsigninScreen() {
    const location = useLocation();
    const mobileNo = useState(location.state.mobileNo);
    console.log(mobileNo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo, loading, error} = userSignin;
    const[otp, setOtp] = useState(new Array(6).fill(""));

    useEffect(() => {
        if(userInfo){
            if(userInfo.role==="TRAVELLER" || userInfo.role==="LOCAL"){
                navigate("/home")
            }else if(userInfo.role==="INFLUENCER"){
                navigate(`/home/influencer/${userInfo.data._id}`)
            }else{
                navigate("/admin")
            }
        }
    },[navigate, userInfo]);

    const handleChange = (element, index) => {
        if(isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx===index) ? element.value : d )]);

        if(element.nextSibling){
            element.nextSibling.focus()
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        var code = otp.join('')
        if (code === null) return;
        window.confirmationResult.confirm(code).then((result) => {
            const user = result.user;
            console.log(user);
            console.log(mobileNo[0]);
            console.log(user._delegate.accessToken);
            dispatch(Otpsignin(user._delegate.accessToken));
        }).catch((error) => {
            console.log(error);
            alert(error);
        });

        // if(mobileNo){
        //     navigate('/enterdetails', {state:{role: role, mobileNo: mobileNo}})
        // }
    };

    // const configureCaptcha = () => {
    //     window.recapatchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    //         'size':'invisible',
    //         'callback': (response) => {
    //             onSignInSubmit();
    //             console.log('recaptcha verified')
    //         },
    //         defaultCountry: "IN"
    //     })
    // }

    const resendOtp = () => {
        var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
        const phoneNumber = '+91' + mobileNo[0];
        console.log(phoneNumber)
        // const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log('OTP has been sent');
            // ...
            }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log(error);
            });

    }

    // const handleClick = () => {
    //     console.log('eh');
    //     var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    //     var number = "+91" + mobileNo;
    //     firebase
    //       .auth()
    //       .signInWithPhoneNumber(number, recaptcha)
    //       .then(function (e) {
    //         // var code = prompt("Enter the otp", "");
    //         var code = otp.join('')
    
    //         if (code === null) return;
    
    //         e.confirm(code)
    //           .then(function (result) {
    //             console.log(result.user);
    
    //             document.querySelector("label").textContent +=
    //               result.user.phoneNumber + "Number verified";
    //           })
    //           .catch(function (error) {
    //             console.error(error);
    //           });
    //       })
    //       .catch(function (error) {
    //         console.error(error);
    //       });
    //   };
    return (
        <div>
            <div>
            <form onSubmit={submitHandler}>
            {/* <div class="signinform" style={{position:"relative", top:"65px"}}>
                <div>
                    <p className="otp-text">Confirm your Phone Number</p>
                </div>
                <div className="form-group">
                    <div id='recaptcha'></div>
                    <input type="number" id="mobileNo"  placeholder="Enter Phone Number" required 
                    onChange={ e => setMobile(e.target.value)}></input>
                    <label htmlFor="mobileNo">Enter your Phone Number</label>
                </div>
                <div className="btn" style={{width:"93%", minHeight:"1.75rem"}} onClick={onSignInSubmit}>Send OTP</div>
            </div> */}
                <div style={{position:"relative", top:"65px"}} className="mx-1">
                <div>
                    <p className="otp-text">Enter OTP</p>
                </div>
                <div id='recaptcha'></div>
                <div>
                    {
                        otp.map((data, index) => {
                            return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                required
                        ></input>
                        )}
                    )}  
                </div>
                <div className='pb-2 resend' onClick={resendOtp}>Resend OTP</div>
                <button type="submit" className="btn" style={{width:"100%", minHeight:"3rem"}}>Next</button>
                </div>
                </form>
        </div>
        </div>
    )
}
