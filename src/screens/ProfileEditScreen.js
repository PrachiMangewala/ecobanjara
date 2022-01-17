import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../actions/userActions';
import MessageBox from '../components/MessageBox';
import dotenv from 'dotenv';
dotenv.config();

export default function ProfileEditScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { error, userInfo } = userSignin;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [profileImg, setImage] = useState(process.env.PUBLIC_URL +  '/images/profile.png')
    const [mobileNo, setMobileNo] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            setName(userInfo.data.name);
            setEmail(userInfo.data.email);
            setGender(userInfo.data.gender);
            setImage(userInfo.data.profileImg? userInfo.data.profileImg : profileImg);
            setMobileNo(userInfo.data.mobileNo);
        }
    }, [profileImg, userInfo])

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    } 

    const updateInfo = () => {
        console.log(profileImg);
        console.log(name);
        console.log(email);
        console.log(gender);
        console.log(mobileNo);
        dispatch(updateUserProfile(userInfo, email, name, mobileNo, profileImg, gender));
    }
    
    console.log(gender)

    return (
        <div className='my-1'>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} className="mx-1">
                <div className='py-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                    <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                    <p className='connect' style={{color: "#000000"}}>Edit Profile</p>
                </div>
                    <p className='heading-dest' style={{color: "#9C9C9C", cursor:"pointer"}} onClick={updateInfo}>Save</p>
            </div>
            <div className='px-1' style={{backgroundColor: "#F2F4F6", height: "100vh"}}>
            {
                error? <MessageBox variant="danger">{error}</MessageBox>
                :
            <form className="signinform" style={{top:"0px"}}>
                <div className="form-group">
                    <label htmlFor="image-input"><i className="fas fa-camera camera-icon"></i></label>
                    <img src={process.env.REACT_APP_API_ENDPOINT + "/api/image/" + profileImg} alt="profile" className="image"></img>
                    <input className="display" type="file" name="image-upload" id="image-input" accept="image/*" onChange={imageHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="name"  className="form-control" placeholder="Full name" value={name} required 
                    onChange={ e => setName(e.target.value)} style={{backgroundColor: "#ffffff"}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="email"  className="form-control" placeholder="xyz@gmail.com"value={email}  required 
                    onChange={ e => setEmail(e.target.value)} style={{backgroundColor: "#ffffff"}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Select Gender</label>
                    {/* <input type="text" id="gender"  className="form-control" placeholder="Enter Gender" value={gender} required 
                    onChange={ e => setGender(e.target.value)} style={{backgroundColor: "#ffffff"}}></input> */}
                    <select className="form-control" style={{backgroundColor: "#ffffff"}} onChange={e => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Phone Number</label>
                    <input type="text" id="gender"  className="form-control" placeholder="Enter Phone Number"  value={mobileNo} required 
                    onChange={ e =>setMobileNo(e.target.value)} style={{backgroundColor: "#ffffff"}}></input>
                </div>
            </form>
            }
            </div>
        </div>
    )
}
