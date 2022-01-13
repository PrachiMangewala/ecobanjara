import React, { useEffect, useState } from 'react'
import getVideoId from 'get-video-id';
import { useDispatch, useSelector } from 'react-redux';
import { getvideoDetails } from '../actions/videoActions';
import MessageBox from './MessageBox';
import LoadingBox from './LoadingBox';

export default function VideoBox(props) {
    const { videoUrl } = props;
    const url = videoUrl;
    console.log(url);
    console.log(videoUrl)
    const dispatch = useDispatch();
    const videoDetails = useSelector((state) => state.videoDetails);
    const {loading, error, video} = videoDetails;
    const [videoPopup, showVideoPopup] = useState(false);

    var id = getVideoId(videoUrl).id;

    useEffect(() => {
        dispatch(getvideoDetails(id));
    }, [dispatch, id]);

    const showVideo = () => {
        showVideoPopup(!videoPopup);
    }

    return (
        <div className="my-2">
            {loading?
            <LoadingBox></LoadingBox>
            :
            error?
            <MessageBox>{error}</MessageBox>
            :
            video?
            <div>
            <div  class="mx-175 d-flex my-1" style={{padding: "1rem 0.5rem 0rem 0.5rem"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <img src={video.items[0].snippet.thumbnails.default.url} alt="img" className="blog-image" style={{opacity:"0.50"}}></img>
                <img src={process.env.PUBLIC_URL +  "/images/youtube3.png"} alt="img" style={{position:"relative", bottom:"50%"}}></img>
                </div>
                <div style={{marginLeft: "1rem"}}>
                    <p className="dest-name" style={{color: "#121212", cursor:"pointer", marginTop:"0"}} onClick={showVideo}>{video.items[0].snippet.title}</p>
                    <p className="blog-area" style={{marginTop:"20px"}}>{video.items[0].snippet.channelTitle}</p>
                </div>
            </div>
            <div>
                    {
                        videoPopup?
                        <div className='video-box' style={{zIndex:"1", width:"100%"}}>
                            <div className="close-icon"><i className="fas fa-times" onClick={showVideo}></i></div>
                            <div style={{width:"100%"}}>
                                <iframe width="100%" height="300" src={`https://youtube.com/embed/${id}`} title={id} style={{left:"0", zIndex:"1"}}></iframe>
                            </div>
                        </div>
                        : ""
                    }
            </div>
            </div>
            : ""
            }
            
        </div>
    )
}