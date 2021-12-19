import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listBlogs } from '../actions/blogActions';
import { detailsLocation } from '../actions/locationActions';

export default function BlogScreen() {
    const {id} = useParams();
    const {locationId} = useParams();
    const blogsList = useSelector((state) => state.blogsList);
    const { blogs} = blogsList;
    const blog = blogs.filter(function(blog){return blog._id === id});
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const locationDetails = useSelector((state) => state.locationDetails);
    const { location } = locationDetails;

    useEffect(()=>{
      dispatch(detailsLocation(userInfo, locationId));
    },[dispatch, userInfo, locationId]);

    useEffect(()=>{
        dispatch(listBlogs(userInfo, locationId));
    },[dispatch, userInfo, locationId]);

    return (
        <div>
            <p><i class="fas fa-chevron-left mx-1 font-white"></i></p>
            <img src={process.env.PUBLIC_URL + "/images/tajmahal.jpg"} alt="img" className="dest-backimage" style={{height: "40vh"}}></img>
            <div className="background-blur">
                <p className="blur-font">{location.city}</p>
                <p className="dest-area" style={{margin:"0 1rem"}}><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:"0.7rem"}}></i></span>{location.state}</p>
            </div>
            <div className="mx-1 dest-p" style={{ position: "relative", top: "14rem"}}>
            {blog[0].content}
            </div>
        </div>
    )
}
