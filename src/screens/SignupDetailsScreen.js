import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';

export default function SignupDetailsScreen() {
    const location = useLocation();
    console.log(location)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);
    const [dob, setBirthday] = useState(null);
    const [gender, setGender] = useState(null);
    const [image] = useState(process.env.PUBLIC_URL + '/images/profile.png')
    const [profileImg, setImage] = useState('')
    const [role, setRole] = useState("");
    const [mobileNo, setMobile] = useState("");
    // const [user, setUser] = useState("");
    // console.log(role);
    // console.log(mobileNo);
    // console.log(user);
    const navigate = useNavigate();

    useEffect(()=>{
        if(location.state){
            setRole(location.state.role);
            setMobile(location.state.mobileNo);
            setName(location.state.name);
            setImage(location.state.image);
            setEmail(location.state.email);
        }
    }, [location.state])

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    } 

    const userRegister = useSelector(state => state.userRegister);
    const { userInfo } = userRegister;


    // const userRegister = useSelector(state => state.userRegister);
    // const { userInfo, loading, error } = userRegister;
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);
        console.log(role);
        console.log(mobileNo);
        console.log(profileImg);
        console.log(dob);
        console.log(gender);
        dispatch(register(email, password, name, role, mobileNo, profileImg, dob, gender));
    };

    useEffect(() => {
        if(userInfo){
        if(userInfo.role==="TRAVELLER" || userInfo.role==="LOCAL"){
            navigate("/home")
        }else{
            navigate(`/home/influencer/${userInfo.data._id}`)
        }
    }
    });

    return (
        <div className="overflow">
            <div style={{margin: "3rem 1rem 2rem 1rem"}} className="left-text">
                <p style={{fontWeight: "600", fontSize:"1.4rem", margin:"0"}}>Welcome Traveller</p>
                <p style={{fontWeight: "600", fontSize:"1.1rem", margin:"0"}}>Sign Up</p>
            </div>
            <form className="signinform" style={{top:"0px"}} onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="image-input"><i className="fas fa-camera camera-icon"></i></label>
                    <img src={profileImg? profileImg : image} alt="profile" className="image"></img>
                    <input className="display" type="file" name="image-upload" id="image-input" accept="image/*" onChange={imageHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Name">Name<span className='required' style={{marginLeft:"0.25rem"}}>*</span></label>
                    <input type="text" id="name"  className="form-control" placeholder="Full name" value={name} required 
                    onChange={ (e) => setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email<span className='required' style={{marginLeft:"0.25rem"}}>*</span></label>
                    <input type="email" id="email"  className="form-control" placeholder="xyz@gmail.com" value={email} required 
                    onChange={ e => setEmail(e.target.value)}></input>
                    {/* <p className="required">*Required</p> */}
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
                <button type="submit" className="btn" style={{minWidth:"100%"}}>Sign up</button>
            </form>
        </div>
    )
}
