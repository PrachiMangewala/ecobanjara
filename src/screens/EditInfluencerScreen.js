import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTravelExpert } from '../actions/travelexpertsActions';
import {Link} from 'react-router-dom';

export default function EditInfluencerScreen() {
    const {id} = useParams();
    const influencerId = id;
    console.log(id);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const travelExpertInfo = useSelector((state) => state.travelExpertInfo);
    const { travelexpert } = travelExpertInfo;

    useEffect(()=>{
        dispatch(getTravelExpert(influencerId));
    },[dispatch, influencerId]);


    return (travelexpert?
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Save</p>
            </div>
            <div className='mx-1'>
            <form style={{top:"0px"}}>
                <div className="form-group">
                    <label  htmlFor="name" className="form-heading">Name</label>
                    <input type="text" id="name"  className="textarea" placeholder="Full name" value={travelexpert.data? travelexpert.data.name : ""} required 
                        onChange={ e => setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label  htmlFor="location" className="form-heading">Location</label>
                    <input type="text" id="name"  className="textarea"  placeholder="Enter your city" value={travelexpert.data? travelexpert.data.city : ""} required 
                        onChange={ e => setLocation(e.target.value)}></input>
                </div>
                <div style={{marginBottom: "2rem"}}>
                    <div style={{ display: "flex", alignItems: "center",justifyContent: "space-between" }}>
                        <p className='desc-text'>Languages Known</p>
                        <p className='add-new'>Add new<span><i class="fas fa-plus" style={{marginLeft: "0.1rem", fontSize: "0.6rem"}}></i></span></p>
                    </div>
                    <div className='language-container'>
                        {travelexpert.data? (
                            (travelexpert.data.languages.length!==0) ?(
                        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                            {travelexpert.data.languages.map((language) => (
                                <div className='language-box add-new' style={{color: "#00365B"}}><img src="/images/lang.png" alt="lang" className="image-lang"></img>{language}</div>
                            ))}
                        </div>    
                            ) : <div>Add Languages</div>
                        ) : <div>Add Languages</div>
                        }
                    </div>
                </div>
                <div className="form-group">
                <label className="form-heading">My Bio</label>
                    <textarea id="bio" name="bio" rows="5" maxLength={1000} className="textarea" required placeholder='Enter description' value={travelexpert.data? travelexpert.data.profileDescription : ""}onChange={ e => setBio(e.target.value)}></textarea>
                </div>

                <div>
                    <div style={{ display: "flex", alignItems: "center",justifyContent: "space-between" }}>
                        <p className='desc-text'>Fixed Itineraries</p>
                        <Link to={`/itinerary/addlocations/${id}`} className='add-new'>Add new<span><i class="fas fa-plus" style={{marginLeft: "0.1rem", fontSize: "0.6rem"}}></i></span></Link>
                    </div>
                    <div style={{border: "1px solid #D1D1D1", boxSizing: "border-box", borderRadius: "16px"}}>
                        {
                            travelexpert.fixeditinerary?(
                                travelexpert.fixeditinerary.map((fixedIt) => (
                    <div class="d-flex" style={{backgroundColor: "#ffffff"}}>
                        <img src={process.env.PUBLIC_URL +  '/images/tajmahal.jpg'} alt="img" className="blog-image"></img>
                        <div style={{marginBottom: "1rem"}}>
                            <p className="dest-name" style={{margin: "0 0 0 0.5rem", color:"#121212"}}>{fixedIt.itineraryName}</p>
                            <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}></i></span>Uttarakhand</p>
                            <p className="blog-area" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}>{fixedIt.trip} Days</p>
                        </div>
                        <p className='price'>Rs {fixedIt.price}/-</p>
                        </div>
                        ))
                        ) : <div>Add new Itineraries</div>}
                    </div>
                </div>
                <div className='social-handles'>
                    <div className='social'>
                        <img src="/images/insta2.png" alt='insta'></img>
                        <Link to="/" style={{color: "#ffffff",   marginLeft: "7px"}}>Connect your Instagram</Link>
                    </div>
                    <div className='social'>
                        <img src="/images/youtube2.png" alt='insta'></img>
                        <Link to="/" style={{color: "#ffffff",   marginLeft: "7px"}}>Connect your Youtube</Link>
                    </div>
                    <div className='social'>
                        <img src="/images/web2.png" alt='insta'></img>
                        <Link to="/" style={{color: "#ffffff",   marginLeft: "7px"}}>Connect your Website</Link>
                    </div>
                </div>
            </form>
            </div>
        </div>
        : ""
    )
}
