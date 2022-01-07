import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';

export default function InfluencerDetailsScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);
    const [dob, setBirthday] = useState(null);
    const [gender, setGender] = useState(null);
    const [mobileNo, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [profileImg, setImage] = useState(process.env.PUBLIC_URL + '/images/profile.png')
    const navigate = useNavigate();

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    // const userRegister = useSelector(state => state.userRegister);
    // const { userInfo, loading, error } = userRegister;
    // const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);
        console.log(profileImg);
        console.log(dob);
        console.log(mobileNo);
        console.log(city);
        console.log(address);
        console.log(state);
        console.log(gender);
        // dispatch(register(email, password, name, profileImg, dob, gender));
        navigate("/enterdetails/page2/influencer", {state:{email:email, password:password, name:name, profileImg:profileImg, dob:dob, mobileNo:mobileNo, city:city, address:address, state:state, gender:gender}})
    };

    // useEffect(() => {
    //     if(userInfo){
    //     if(userInfo.role==="TRAVELLER" || userInfo.role==="LOCAL"){
    //         navigate("/home")
    //     }else{
    //         navigate(`/home/influencer/${userInfo.data._id}`)
    //     }
    // }
    // });

    return (
        <div>
            <div className="overflow">
            <div style={{margin: "3rem 1rem 2rem 1rem"}} className="left-text">
                <p style={{fontWeight: "600", fontSize:"1.4rem", margin:"0"}}>Welcome Influencer</p>
            </div>
            <form className="signinform" style={{top:"0px"}} onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="image-input"><i className="fas fa-camera camera-icon"></i></label>
                    <img src={profileImg} alt="profile" className="image"></img>
                    <input className="display" type="file" name="image-upload" id="image-input" accept="image/*" onChange={imageHandler} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="name"  className="form-control" placeholder="Full name" required 
                    onChange={ e => setName(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" id="phone"  className="form-control" placeholder="Phone Number" required 
                    onChange={ e => setMobile(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="email"  className="form-control" placeholder="xyz@gmail.com" required 
                    onChange={ e => setEmail(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city"  className="form-control" placeholder="Enter your city" required 
                    onChange={ e => setCity(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state"  className="form-control" placeholder="Enter your state" required 
                    onChange={ e => setState(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Address</label>
                    <input type="text" id="location"  className="form-control" placeholder="Enter your address" required 
                    onChange={ e => setAddress(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Date of Birth</label>
                    <input type="date" id="birthday"  className="form-control" placeholder="Enter Date of Birth" 
                    onChange={ e => setBirthday(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender"  className="form-control" placeholder="Enter Gender" 
                    onChange={ e => setGender(e.target.value)}></input>
                </div>
                <div className="form-group" style={{position: "relative"}}>
                    <label htmlFor="Password">Password</label>
                    <input style={{paddingLeft: "2rem"}} type="password" id="password"  className="form-control" placeholder="Create Password" 
                    onChange={ e => setPassword(e.target.value)}></input>
                    <i style={{top: "36px"}} className="fas fa-unlock font-icon"></i>
                </div>
                <button type="submit" className="btn" style={{minWidth:"100%"}}>Next</button>
            </form>
        </div>
        </div>
    )
}
