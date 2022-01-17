import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { listBlogs } from '../actions/blogActions';
import { detailsLocation } from '../actions/locationActions';
import MessageBox from '../components/MessageBox';
import Slider from "react-slick";
import { listTravelexperts } from '../actions/travelexpertsActions';
import TravelExpert from '../components/TravelExpert';

export default function BlogsScreen() {
    const {id} = useParams();
    const blogsList = useSelector((state) => state.blogsList);
    const { error, blogs} = blogsList;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const locationDetails = useSelector((state) => state.locationDetails);
    const { location } = locationDetails;
    const travelexpertsList = useSelector((state) => state.travelexpertsList);
    const {travelexperts} = travelexpertsList;

    useEffect(()=>{
      dispatch(detailsLocation(userInfo, id));
    },[dispatch, userInfo, id]);

    useEffect(()=>{
        dispatch(listTravelexperts(userInfo));
      },[dispatch, userInfo]);

    useEffect(()=>{
        dispatch(listBlogs(userInfo, id));
    },[dispatch, userInfo, id]);

    var settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>
            {error ?
                (<MessageBox variant="danger">{error}</MessageBox>
                ) : (
            <div>
            <span className="overlay" style={{padding: "6px 8px 6px 8px", left:"84%", backgroundColor:"#F3F3F3"}}><i class="fas fa-map-marker-alt loc-icon"></i></span>
            <div className="blog-nav">
                <p><i class="fas fa-chevron-left mx-1"></i></p>
                <div>
                <p className="dest-name" style={{marginBottom: "0"}}>{location.city}</p>
                <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.9rem", paddingRight:"0"}}></i></span>{location.state}</p>
                </div>
            </div>
            <div>
                    <ul className="mx-175 dest-text">
                        <li><Link to={`/destination/${id}`} class="loc-hover" style={{color: "#6F7789"}}>About</Link></li>
                        <li><Link to={`/blogscreen/${id}`} class="active-blog">Blogs</Link></li>
                        <li><Link to={`/blogscreen/${id}`} class="loc-hover" style={{color: "#6F7789"}}>Photos</Link></li>
                        <li><Link to={`/videos/${id}`}  class="loc-hover" style={{color: "#6F7789"}}>Videos</Link></li>
                    </ul>
            </div>
            <div className="my-2">
                    {blogs.length===0 ? 
                    <div style={{color: "#3F3F3F"}} className='mx-1'>No Blogs</div> 
                    :(   
                    blogs.map((blog) => (
                        <div class="mx-175 d-flex my-1">
                        <img src={blog.image[0]} alt="img" className="blog-image"></img>
                        <div>
                        <div style={{marginBottom: "1rem"}}>
                            <Link to={{pathname:`/blog/${location._id}/${blog._id}`}} className="dest-name" style={{margin: "0 0 0 0.5rem", color:"#121212"}}>{location.city}</Link>
                            <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}></i></span>{location.address}</p>
                        </div>
                        <div className="blog-p">
                        {blog.content? blog.content.substring(0,40): ''}...
                        </div>
                        </div>
                        </div>
                    )))}
            </div>
            <div>
                <div className="text">
                    <p>Top Travel Experts</p>
                    <Link to="/travelexperts/rating">View All</Link>
                </div>
                <div className="Slide">
                <Slider {...settings2}>
                    { travelexperts? 
                        travelexperts.slice(0,20).map((Travelexpert) => (
                            <TravelExpert key={Travelexpert._id} TravelExpert={Travelexpert}></TravelExpert>
                        )) : ""
                    }
                </Slider>
                </div>
            </div>
            </div>
            )}
        </div>
    )
}
