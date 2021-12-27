import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCustomItinerary } from '../actions/customItineraryActions';
import {Link} from 'react-router-dom';

export default function AddCustomItineraryScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const customItineraryDetails = useSelector((state) => state.customItineraryDetails);
    const { customItinerary } = customItineraryDetails;
    console.log(customItinerary);
    const dispatch = useDispatch();
    const customId = '61b23f1efaf67409afe5bf56';
    const n = 5;
    const length=0;
    const [EditScreen, setEditScreen] = useState(false);

    useEffect(()=>{
        dispatch(getCustomItinerary(userInfo, customId));
      },[dispatch, userInfo]);

    const showEditScreen= () => {
        setEditScreen(!EditScreen);
    }

    return (
           !EditScreen? 
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }} className='py-1 px-1'>
                <div style={{ display: "flex", alignItems: "center" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <div style={{display:"flex"}}>
                <div className='mx-1'>
                    <p className='connect' style={{color: "#000000", margin:"0"}}>Custom Itinerary</p>
                </div>
                </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <div><span><i class="fas fa-check" style={{fontWeight: "600", color:"#00365B", padding:"5px", borderRadius:"50%",backgroundColor:"rgb(242,242,242,1)", marginBottom:"5px"}}></i></span></div>
                    <div className='add-new' style={{ color: "#00365B" }}>Finalise Itinerary</div>
                </div>
            </div>
            <div className='py-1 px-1' style={{backgroundColor:"#00365B"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={process.env.PUBLIC_URL +  '/images/logo3.png'} alt="logo"></img>
                </div>
                <div className='details-box px-1 py-1'>
                    <div>
                    <div className='iten-text' style={{color: "#ffffff"}}>Personalised Itinerary of 6 Days for</div>
                    <div className='iten-text' style={{color: "#FC7E00"}}>Triyank Garg</div>
                    <div className='iten-text' style={{color: "#ffffff"}}>Destinations: Delhi, Jaipur + 3 others</div>
                    </div>
                </div>
                <div className='my-1' style={{display:"flex", alignItems:"center", float: "right", cursor:"pointer"}} onClick={showEditScreen}>
                    <div className='circle'></div>
                    <div className='cylinder'></div>
                </div>
                <div style={{paddingTop: '4rem'}}>
                {[...Array(n)].map((x,i) =>(
                    <div key={i + 1}>
                    <div style={{display:"flex", alignItems:"flex-end"}}>
                        <span className='blue-circle' style={{backgroundColor: "#FC7E00", border:"none", height:"33px", width:"33px"}}></span>
                        <div className='day bg-white'>Day {i + 1}</div>
                    </div>
                    <div style={{borderLeft: "3px dashed #FC7E00", paddingLeft: "30px", position:"relative", left:"14px", paddingTop:"10px", paddingBottom:"30px"}}>
                        <div className='bg-white add-new' style={{display:"flex", alignItems:"center", justifyContent:"center", height:"76px", color:"#000000"}}>
                            Start Adding Itinerary :)
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        :
        (
            <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} className='py-1 px-1'>
                <div className='py-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                    <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                    <p className='connect' style={{color: "#000000"}}>Add Itineraries</p>
                </div>
                    <p className='heading-dest' style={{color: "#9C9C9C", cursor: "pointer"}}>Next</p>
            </div>
            <div className='py-1 px-1'>
                <div className='px-1 py-1'>
                    <div>
                    <div className='iten-text' style={{color: "#00365B", fontSize:"16px"}}>Personalised Itinerary of 6 Days for</div>
                    <div className='iten-text' style={{color: "#FC7E00", fontSize:"16px"}}>Triyank Garg</div>
                    <div className='iten-text' style={{color: "#00365B", fontSize:"16px"}}>Destinations: Delhi, Jaipur + 3 others</div>
                    </div>
                </div>
                <div className='my-1' style={{display:"flex", alignItems:"center", float: "right", cursor:"pointer"}} onClick={showEditScreen}>
                    <div className='cylinder' style={{backgroundColor:"#067FD2"}}></div>
                    <div className='circle' style={{left:"-8px", backgroundColor:"#00365B"}}></div>
                </div>
            </div>
            <div className='py-1 px-1'>
            {[...Array(n)].map((x,i) =>(
                    <div key={i + 1}>
                    <div style={{display:"flex", alignItems:"center", height:"25px"}}>
                        {
                            length?
                            i < length ?
                            <span className='blue-circle' style={{backgroundColor: "#00365B", display: "flex", alignItems: "center", justifyContent: "center", zIndex:"2"}}><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                            :
                            <span className='blue-circle' style={{zIndex:"2"}}></span>
                            : <span className='blue-circle' style={{zIndex:"2"}}></span>
                        }
                        <div className='day'>Day {i + 1}</div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                    {(i===n-1) ? 
                    <div style={{height: "150px"}}></div>
                    :
                    <div>
                        <div className='blue-side-border' style={{borderLeft: "3px dashed #EFEFEF"}}></div>
                    </div>
                    }
                    {
                        length!==undefined?
                        i<length ?
                        <div>
                        <div className='bg-white add-new' style={{display:"flex", alignItems:"center", justifyContent:"center", height:"76px", color:"#000000"}}>
                            Start Adding Itinerary :)
                        </div>
                        <div className='add-new' style={{position:"relative", left:"53px", textDecoration:"underline"}}>Added</div>
                        </div>
                        :
                        <Link to={`/itinerarysection/${i+1}`} className='add-new' style={{position:"relative", left:"53px", textDecoration:"underline"}}><span><i class="fas fa-plus" style={{marginRight: "0.1rem", fontSize: "0.6rem"}}></i></span>Add new section</Link>
                        :
                        ""
                    }
                    </div>
                    </div>
                ))}
            </div>
            </div>
        )
    )
}
