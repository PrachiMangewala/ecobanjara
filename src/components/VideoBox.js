import React, { useEffect } from 'react'
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

    var id = getVideoId(videoUrl).id;

    useEffect(() => {
        dispatch(getvideoDetails(id));
    }, [dispatch, id]);

    return (
        <div className="my-2">
            {loading?
            <LoadingBox></LoadingBox>
            :
            error?
            <MessageBox>{error}</MessageBox>
            :
            video?
            <div  class="mx-175 d-flex my-1" style={{padding: "1rem 0.5rem 0rem 0.5rem"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <img src={video.items[0].snippet.thumbnails.default.url} alt="img" className="blog-image" style={{opacity:"0.50"}}></img>
                <img src={process.env.PUBLIC_URL +  "/images/youtube3.png"} alt="img" style={{position:"relative", bottom:"50%"}}></img>
                </div>
                <div style={{marginLeft: "1rem"}}>
                    <a href={url} className="dest-name" style={{color: "#121212" }}>{video.items[0].snippet.title}</a>
                    <p className="blog-area" style={{marginTop:"20px"}}>{video.items[0].snippet.channelTitle}</p>
                </div>
            </div>
            : ""
            }
        </div>
    )
}
