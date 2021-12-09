import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';

export default function SignupDetailsScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState('images/profile.png')
    const location = useLocation();
    const [role] = useState(location.state.role);
    const [mobileNo] = useState(location.state.mobileNo);
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
        console.log(image);
        console.log(dob);
        console.log(gender);
        dispatch(register(email, password, name, role, mobileNo, image, dob, gender));
    };

    useEffect(() => {
        if(userInfo) {
            navigate('/home');
        }
    });

    return (
        <div className="overflow">
            <div style={{margin: "3rem 1rem 2rem 1rem"}} className="left-text">
                <p style={{fontWeight: "600", fontSize:"1.4rem", margin:"0"}}>Welcome</p>
                <p style={{fontWeight: "600", fontSize:"0.9rem", margin:"0"}}>Sign Up</p>
            </div>
            <form className="signinform" style={{top:"0px"}} onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="image-input"><i class="fas fa-camera camera-icon"></i></label>
                    <img src={image} alt="profile" className="image"></img>
                    <input className="display" type="file" name="image-upload" id="image-input" accept="image/*" onChange={imageHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="name"  className="form-control" placeholder="Full name" required 
                    onChange={ e => setName(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="email"  className="form-control" placeholder="xyz@gmail.com" required 
                    onChange={ e => setEmail(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Date of Birth</label>
                    <input type="date" id="birthday"  className="form-control" placeholder="Enter Date of Birth" required 
                    onChange={ e => setBirthday(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender"  className="form-control" placeholder="Enter Gender" required 
                    onChange={ e => setGender(e.target.value)}></input>
                    <p className="required">*Required</p>
                </div>
                <div className="form-group" style={{position: "relative"}}>
                    <label htmlFor="Password">Password</label>
                    <input style={{paddingLeft: "2rem"}} type="password" id="password"  className="form-control" placeholder="Create Password" required 
                    onChange={ e => setPassword(e.target.value)}></input>
                    <i style={{top: "32px"}} className="fas fa-unlock font-icon"></i>
                    <p className="required">*Required</p>
                </div>
                <button type="submit" className="btn" style={{minWidth:"100%"}}>Register</button>
            </form>
        </div>
    )
}
