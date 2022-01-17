import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsLocation } from '../actions/locationActions';
import { Link } from 'react-router-dom';
import VideoBox from '../components/VideoBox';
import Slider from 'react-slick';
import TravelExpert from '../components/TravelExpert';
import { listTravelexperts } from '../actions/travelexpertsActions';

export default function VideosScreen() {
    const { id } = useParams();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const locationDetails = useSelector((state) => state.locationDetails);
    const { location } = locationDetails;
    const travelexpertsList = useSelector((state) => state.travelexpertsList);
    const {travelexperts} = travelexpertsList;

    useEffect(() => {
        dispatch(detailsLocation(userInfo, id));
    }, [dispatch, userInfo, id]);

    useEffect(()=>{
        dispatch(listTravelexperts(userInfo));
      },[dispatch, userInfo]);

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
    )
}
