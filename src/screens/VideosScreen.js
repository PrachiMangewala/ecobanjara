import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsLocation } from '../actions/locationActions';
import { Link } from 'react-router-dom';
import VideoBox from '../components/VideoBox';

export default function VideosScreen() {
    const { id } = useParams();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const locationDetails = useSelector((state) => state.locationDetails);
    const { location } = locationDetails;

    useEffect(() => {
        dispatch(detailsLocation(userInfo, id));
    }, [dispatch, userInfo, id]);

    return (
        <div>
            <span className="overlay" style={{ padding: "6px 8px 6px 8px", left: "84%", backgroundColor: "#F3F3F3" }}><i class="fas fa-map-marker-alt loc-icon"></i></span>
            <div className="blog-nav">
                <p><i class="fas fa-chevron-left mx-1"></i></p>
                <div>
                    <p className="dest-name" style={{ marginBottom: "0" }}>{location.city}</p>
                    <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{ fontSize: "0.9rem", paddingRight: "0" }}></i></span>{location.state}</p>
                </div>
            </div>
            <div>
                <ul className="mx-175 dest-text">
                    <li><Link to={`/blogscreen/${id}`} class="loc-hover" style={{ color: "#6F7789" }}>About</Link></li>
                    <li><Link to={`/blogscreen/${id}`} class="loc-hover" style={{ color: "#6F7789" }}>Blogs</Link></li>
                    <li><Link to={`/blogscreen/${id}`} class="loc-hover" style={{ color: "#6F7789" }}>Photos</Link></li>
                    <li><Link to={`/videos/${id}`} class="active-blog">Videos</Link></li>
                </ul>
            </div>
            <div className="my-2">
                {location && location.videos ?
                    (
                        location.videos.length === 0 ?
                            <div style={{ color: "#3F3F3F" }} className='mx-1'>No Blogs</div>
                            :
                            (
                                location.videos.map((video, i) => (
                                    <VideoBox key={i} videoUrl={video}></VideoBox>
                                ))))
                    : ""
                }
            </div>
        </div>
    )
}
