import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDestination } from '../actions/locationActions';
import MessageBox from '../components/MessageBox';

export default function AddDestinationsScreen() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [about, setAbout] = useState("");
    const [geography, setGeography] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImage] = useState();
    const [video, setVideo] = useState([]);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const locationAdded = useSelector((state) => state.locationAdded);
    const { error, success, location } = locationAdded;
    console.log(location)

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(video)
        console.log(images)
        var videos = video.split(/[ ,]+/);
        console.log(videos)
        dispatch(addDestination(userInfo, name, city, state, address, about, videos, geography, category, images));
    };

    const uploadFileHandler = async(e) => {
        // setImage(e.target.files[0]);
        // console.log(images)
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log(images);
        // const formData = new FormData();
        
        // for(let i=0; i<files.length; i++ ){
        //     const element = files[i];
        //     console.log(element);
        //     formData.append('images', element);
        // }


        // try{
        //     const { data } = await Axios.post('/api/uploads', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             Authorization: `Bearer ${userInfo.token}`,
        //         }
        //     });
        //     setImage(data);
        //     setLoadingUpload(false);
        // } catch (error){
        //     setErrorUpload(error.message);
        //     setLoadingUpload(false);
        // }
    }

    // const setVideoUrl = (e) =>{
    //     setVideo([...videos, e.target.value]);
    //     console.log(videos)
    // }

    // console.log(videos)


    return (
        <div>
                { error && <MessageBox>{error}</MessageBox> }
                { success && <MessageBox>{success}</MessageBox> }
                <div className="welcome-text center">
                    <p style={{fontWeight: "600"}}>Add a new destination</p>
                </div>
                <div class="signinform">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <input type="text" id="name"  placeholder="Enter the name of the destination" required 
                            onChange={ e => setName(e.target.value)}></input>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input type="text" id="city" placeholder="Enter the name of the City" required 
                            onChange={ e => setCity(e.target.value)}></input>
                            </div>
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input type="text" id="state" placeholder="Enter the name of the state" required 
                            onChange={ e => setState(e.target.value)}></input>
                            </div>
                            <label htmlFor="state">State</label>
                        </div>
                        <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input type="text" id="address" placeholder="Enter the address of the destination e.g. Agra, Uttar Pradesh" required 
                            onChange={ e => setAddress(e.target.value)}></input>
                            </div>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input type="text" id="about" placeholder="Enter the description of the destination" required 
                            onChange={ e => setAbout(e.target.value)}></input>
                            </div>
                            <label htmlFor="address">About</label>
                        </div>
                        <div className="form-group">
                            <input type="file" id="imageFile"  className="form-control" placeholder="Choose Images" onChange={uploadFileHandler}></input>
                            <label htmlFor="imageFile">Image File</label>
                            {/* {loadingUpload && <LoadingBox></LoadingBox>}
                            {errorUpload && <MessageBox variant="danger">{errorUpload}</MessageBox>} */}
                        </div>
                        <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input type="text" id="video" placeholder="Enter video link" required 
                            onChange={e => setVideo(e.target.value)}></input>
                            </div>
                            <label htmlFor="video">Video Link</label>
                        </div>
                        {/* <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input type="text" id="video" placeholder="Enter video link" required 
                            onChange={setVideoUrl}></input>
                            </div>
                            <label htmlFor="video">Video Link</label>
                        </div> */}
                        <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input type="text" id="geography" placeholder="Geography" required 
                            onChange={ e => setGeography(e.target.value)}></input>
                            </div>
                            <label htmlFor="geography">Geography</label>
                        </div>
                        <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input type="text" id="category" placeholder="Category" required 
                            onChange={ e => setCategory(e.target.value)}></input>
                            </div>
                            <label htmlFor="category">Category</label>
                        </div>
                        <button type="submit" className="btn" style={{width:"100%", minHeight:"2.5rem"}}>Submit</button>
                    </form>
                </div>
        </div>
    )
}
