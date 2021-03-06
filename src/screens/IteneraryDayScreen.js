import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { saveContent } from '../actions/fixedItineraryActions';

export default function IteneraryDayScreen() {
    const {dayNo} = useParams();
    const {itineraryId} = useParams();
    const dispatch = useDispatch()
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const fixedItineraryContent = useSelector((state) => state.fixedItineraryContent);
    const { ItineraryContent } = fixedItineraryContent;
    console.log(ItineraryContent);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveContent(userInfo, itineraryId, dayNo, title, description))
        if(ItineraryContent){
            navigate(-1)
        }
    };

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    } 
    return (
        <div className='py-1 px-1'>
            <div className='py-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Day {dayNo}</p>
            </div>
            <div className='form-container py-1 px-1'>
            <form onSubmit={submitHandler}>
                    <label className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}}>Title of the activity</label>
                    <input type="text" className='iten-input' placeholder='Enter the title' onChange={ e => setTitle(e.target.value)} required></input>
                    <label className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}}>Description</label>
                    <textarea id="bio" name="bio" rows="5" maxLength={1000} className="textarea" required style={{marginBottom: "1rem"}} placeholder='Enter description' onChange={ e => setDescription(e.target.value)}></textarea>
                    <button className='btn'>Save</button>
                    <label htmlFor="image-input" className='add-new' style={{marginTop:"1rem", textDecoration:"underline"}}>Upload an image</label>
                    <input className="display" type="file" name="image-upload" id="image-input" accept="image/*" onChange={imageHandler}/>
            </form>
            </div>

        </div>
    )
}
