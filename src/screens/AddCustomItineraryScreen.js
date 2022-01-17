import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDayinItinerary, getCustomItinerary } from '../actions/customItineraryActions';
import {Link} from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
// import ChatBox from '../components/ChatBox';

export default function AddCustomItineraryScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const itineraryDay = useSelector((state) => state.itineraryDay);
    const { day } = itineraryDay;
    const customItineraryDetails = useSelector((state) => state.customItineraryDetails);
    const { loading, error, customItinerary } = customItineraryDetails;
    console.log(customItinerary);
    const dispatch = useDispatch();
    // const [chat, setChat] = useState(false);
    const customId = '61b7134715eeeafa6e68c91d';
    // const days = useState(String(customItinerary.journey.endDate));
    // console.log(days); 
    const [dayNo, setN] = useState(customItinerary && customItinerary.content? customItinerary.content.length : "");
    // const length=0;
    const [EditScreen, setEditScreen] = useState(false);

    useEffect(()=>{
        dispatch(getCustomItinerary(userInfo, customId));
      },[dispatch, userInfo]);

    const showEditScreen= () => {
        setEditScreen(!EditScreen);
    }

    // const showChatBox = () => {
    //     setChat(!chat);
    // }

    const increaseDay = () => {
        console.log(dayNo)
        setN(Number(dayNo)+1);
        dispatch(addDayinItinerary(userInfo, customId, dayNo));
        if(day){
            dispatch(getCustomItinerary(userInfo, customId));
        }
    }

    return (
        loading? <LoadingBox></LoadingBox>
        :
        error? <MessageBox>{error}</MessageBox>
        :
        customItinerary?
        !EditScreen? 
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }} className='py-1 px-1'>
                <div style={{ display: "flex", alignItems: "center" }}>
                <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <div style={{display:"flex"}}>
                <div className='mx-1'>
                    <p className='connect' style={{color: "#000000", margin:"0"}}>Custom Itinerary</p>
                </div>
                </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <div><span><i className="fas fa-check" style={{fontWeight: "600", color:"#00365B", padding:"5px", borderRadius:"50%",backgroundColor:"rgb(242,242,242,1)", marginBottom:"5px"}}></i></span></div>
                    {
                        customItinerary.isFinalized? "" :
                        <div className='add-new' style={{ color: "#00365B" }}>Finalise Itinerary</div>
                    }
                </div>
            </div>
            <div className='py-1 px-1' style={{backgroundColor:"#00365B"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={process.env.PUBLIC_URL +  '/images/logo3.png'} alt="logo"></img>
                </div>
                <div className='details-box px-1 py-1'>
                    <div>
                    <div className='iten-text' style={{color: "#ffffff"}}>Personalised Itinerary of 6 Days for</div>
                    <div className='iten-text' style={{color: "#FC7E00"}}>{customItinerary.traveller? customItinerary.traveller.name : ""}</div>
                    <div className='iten-text' style={{color: "#ffffff"}}>Destinations: Delhi, Jaipur + 3 others</div>
                    </div>
                </div>
                {
                    customItinerary.isFinalized? "" :
                    <div className='my-1' style={{display:"flex", alignItems:"center", float: "right", cursor:"pointer"}} onClick={showEditScreen}>
                        <div className='circle'></div>
                        <div className='cylinder'></div>
                    </div>
                }
                <div style={{paddingTop: '4rem'}}>
                {customItinerary.content && customItinerary.content.map((part,i) =>(
                    <div key={i + 1}>
                    <div style={{display:"flex", alignItems:"flex-end"}}>
                        <span className='blue-circle' style={{backgroundColor: "#FC7E00", border:"none", height:"33px", width:"33px"}}></span>
                        <div className='day bg-white'>Day {i + 1}</div>
                    </div>
                    {
                    part.section?
                    part.section.length > 0 ?
                    <div style={{borderLeft: "3px dashed #FC7E00", paddingLeft: "30px", position:"relative", left:"14px", paddingTop:"10px", paddingBottom:"30px"}}>
                        <div className='bg-white add-new' style={{display:"flex", alignItems:"flex-start", flexDirection:"column", color:"#000000"}}>
                        {
                        part.section.map((sec) => (
                            <div style={{display:"flex", alignItems:"flex-start", flexDirection:"column", padding:"8px"}}>
                            <div style={{color: "#303030"}}>{sec.startTime} - {sec.endTime}</div>
                            <div style={{color: "#b4b4b4"}}>{sec.description}</div>
                            </div>
                        ))
                        }
                        </div>
                        {/* {
                            chat?
                            <div className='bg-white comment' style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"flex-start", width:"93%"}}>
                                <div style={{display:"flex", alignItems:"center"}}>
                                <img src={process.env.PUBLIC_URL +  '/images/comment.png'} alt="img" style={{width:"12px", height:"12px", marginRight:"5px"}}></img>
                                <div onClick={showChatBox}>Comments</div>
                                </div>
                                <div>
                                    {
                                    part.section?
                                    part.section.length > 0 ?
                                    part.section.map((sec) => (
                                    <ChatBox sectionId={sec._id}></ChatBox>
                                    ))
                                    : ""
                                    : ""
                                    }
                                </div>
                                <div style={{width:"100%"}}>
                                    <form style={{display:"flex", alignItems:"center"}}>
                                        <input type="text" className="chat-input" placeholder='Type a message here'></input>
                                    <div>
                                        <button className="send-button"><img src={process.env.PUBLIC_URL +  '/images/send-icon.png'} alt="send" style={{width:"12px", height:"12px"}}></img></button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            :
                            <div className='bg-white comment' style={{cursor:"pointer"}} onClick={showChatBox}>
                                <img src={process.env.PUBLIC_URL +  '/images/comment.png'} alt="img" style={{width:"12px", height:"12px", marginRight:"5px"}}></img>
                                Comments
                            </div>
                        } */}
                    </div>
                    :
                    <div style={{borderLeft: "3px dashed #FC7E00", paddingLeft: "30px", position:"relative", left:"14px", paddingTop:"10px", paddingBottom:"30px"}}>
                        <div className='bg-white add-new' style={{display:"flex", alignItems:"center", justifyContent:"center", height:"76px", color:"#000000"}}>
                            Start Adding Itinerary :)
                        </div>
                    </div>
                    : ""
                    }
                    </div>
                ))}
                <div style={{display:"flex", alignItems:"flex-end"}}>
                        <span className='blue-circle' style={{backgroundColor: "#FC7E00", border:"none", height:"33px", width:"33px"}}></span>
                        <div className="day" style={{color:"#FC7E00", cursor: "pointer"}} onClick={increaseDay}>+ Add new day</div>
                    </div>
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
                    <p className='heading-dest' style={{color: "#9C9C9C", cursor: "pointer"}}>Save</p>
            </div>
            <div className='py-1 px-1'>
                <div className='px-1 py-1'>
                    <div>
                    <div className='iten-text' style={{color: "#00365B", fontSize:"16px"}}>Personalised Itinerary of 6 Days for</div>
                    <div className='iten-text' style={{color: "#FC7E00", fontSize:"16px"}}>{customItinerary.traveller? customItinerary.traveller.name : ""}</div>
                    <div className='iten-text' style={{color: "#00365B", fontSize:"16px"}}>Destinations: Delhi, Jaipur + 3 others</div>
                    </div>
                </div>
                <div className='my-1' style={{display:"flex", alignItems:"center", float: "right", cursor:"pointer"}} onClick={showEditScreen}>
                    <div className='cylinder' style={{backgroundColor:"#067FD2"}}></div>
                    <div className='circle' style={{left:"-8px", backgroundColor:"#00365B"}}></div>
                </div>
            </div>
            <div className='py-1 px-1'>
            {customItinerary.content && customItinerary.content.map((part,i) =>(
                    // <div key={i + 1}>
                    // <div style={{display:"flex", alignItems:"center", height:"25px"}}>
                    //     {
                    //         length?
                    //         i < length ?
                    //         <span className='blue-circle' style={{backgroundColor: "#00365B", display: "flex", alignItems: "center", justifyContent: "center", zIndex:"2"}}><i className="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                    //         :
                    //         <span className='blue-circle' style={{zIndex:"2"}}></span>
                    //         : <span className='blue-circle' style={{zIndex:"2"}}></span>
                    //     }
                    //     <div className='day'>Day {i + 1}</div>
                    // </div>
                    // <div style={{display:"flex", alignItems:"center"}}>
                    // {(i===dayNo-1) ? 
                    // <div style={{height: "150px"}}></div>
                    // :
                    // <div>
                    //     <div className='blue-side-border' style={{borderLeft: "3px dashed #EFEFEF"}}></div>
                    // </div>
                    // }
                    // {
                    //     length!==undefined?
                    //     i<length ?
                    //     <div>
                    //     <div className='bg-white add-new' style={{display:"flex", alignItems:"center", justifyContent:"center", height:"76px", color:"#000000"}}>
                    //         Start Adding Itinerary :)
                    //     </div>
                    //     <div className='add-new' style={{position:"relative", left:"53px", textDecoration:"underline"}}>Added</div>
                    //     </div>
                    //     :
                    //     <Link to={`/itinerarysection/${i+1}`} className='add-new' style={{position:"relative", left:"53px", textDecoration:"underline"}}><span><i className="fas fa-plus" style={{marginRight: "0.1rem", fontSize: "0.6rem"}}></i></span>Add new section</Link>
                    //     :
                    //     ""
                    // }
                    // </div>
                    // </div>
                    <div key={i + 1}>
                    <div style={{display:"flex", alignItems:"flex-end"}}>
                        <span className='blue-circle'></span>
                        <div className='day bg-white' style={{justifyContent:"flex-start"}}>Day {i + 1}</div>
                    </div>
                    {
                    part.section?
                    part.section.length > 0 ?
                    <div style={{borderLeft: "3px dashed #EFEFEF", paddingLeft: "30px", position:"relative", left:"14px", paddingTop:"10px", paddingBottom:"30px"}}>
                        <div className='bg-white add-new' style={{display:"flex", alignItems:"flex-start", flexDirection:"column", color:"#000000", border:"1px solid #efefef", borderRadius:"16px"}}>
                        {
                        part.section.map((sec) => (
                            <div style={{display:"flex", alignItems:"flex-start", flexDirection:"column", padding:"8px"}}>
                            <div style={{color: "#303030"}}>{sec.startTime} - {sec.endTime}</div>
                            <div style={{color: "#b4b4b4"}}>{sec.description}</div>
                            </div>
                        ))
                        }
                        </div>
                        <div>
                        <Link to={`/itinerarysection/${i+1}`} className='add-new my-1' style={{textDecoration:"underline"}}><span><i className="fas fa-plus" style={{marginRight: "0.1rem", fontSize: "0.6rem"}}></i></span>Add new section</Link>
                        </div>
                    </div>
                    :
                    <div style={{borderLeft: "3px dashed #FC7E00", paddingLeft: "30px", position:"relative", left:"14px", paddingTop:"10px", paddingBottom:"30px"}}>
                        <div className='bg-white add-new' style={{display:"flex", alignItems:"center", justifyContent:"center", height:"76px", color:"#000000"}}>
                            Start Adding Itinerary :)
                        </div>
                        <div>
                        <Link to={`/itinerarysection/${i+1}`} className='add-new my-1' style={{textDecoration:"underline"}}><span><i className="fas fa-plus" style={{marginRight: "0.1rem", fontSize: "0.6rem"}}></i></span>Add new section</Link>
                        </div>
                    </div>
                    : ""
                    }
                    </div>
                ))}
            </div>
            </div>
        )
        : ""
    )
}
