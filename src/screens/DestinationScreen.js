import React, { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom';
import Slider from "react-slick";
import TravelExpert from '../components/TravelExpert';
import { useDispatch, useSelector } from 'react-redux';
import { detailsLocation, getsavedLocations } from '../actions/locationActions';
import { removeEntity, saveEntity } from '../actions/saveentitiesActions';
import { listTravelexperts } from '../actions/travelexpertsActions';

export default function DestinationScreen() {
    // const[image, setImage] = useState('/tajmahal.jpg');
    // const[error, setError] = useState(false);
    // const[location, setLocation] = useState({});
    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const locationDetails = useSelector((state) => state.locationDetails);
    const { error, location } = locationDetails;
    console.log(location);
    const savedLocationsList = useSelector((state) => state.savedLocationsList);
    const {savedlocations} = savedLocationsList;
    const travelexpertsList = useSelector((state) => state.travelexpertsList);
    const {travelexperts} = travelexpertsList;

    useEffect(()=>{
        dispatch(getsavedLocations(userInfo));
      },[dispatch, userInfo]);

      useEffect(()=>{
        dispatch(listTravelexperts(userInfo));
    },[dispatch, userInfo]);

    const AddToSavedLocations = (locationId) => {
        if(savedlocations){
            const locationindex = savedlocations.find((location) => location._id === locationId)
            if(!locationindex){
                dispatch(saveEntity(userInfo, locationId))
                dispatch(getsavedLocations(userInfo));
                alert('This location has been saved.');
                dispatch(getsavedLocations(userInfo));
            }else{
                dispatch(removeEntity(userInfo, locationId));
                dispatch(getsavedLocations(userInfo));
                alert('Location removed');
                dispatch(getsavedLocations(userInfo));
            }
        }else{
            alert('Saved locations list is empty.')
        }
    }

    // const RemoveFromSavedLocations = (locationId) => {
    //     if(savedlocations){
    //         const locationindex = savedlocations.find((location) => location._id === locationId)
    //         if(!locationindex){
    //             // dispatch(saveEntity(userInfo, locationId))
    //             // dispatch(getsavedLocations(userInfo));
    //             alert('This location is already not saved.')
    //         }else{
    //             dispatch(removeEntity(userInfo, locationId));
    //             dispatch(getsavedLocations(userInfo));
    //             alert('Location removed')
    //         }
    //     }else{
    //         alert('Saved locations list is empty.')
    //     }
    // }

    useEffect(()=>{
      dispatch(detailsLocation(userInfo, id));
    },[dispatch, userInfo, id]);
    // console.log(error);

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
            <img src={process.env.PUBLIC_URL +  '/images/tajmahal.jpg'} alt="img" className="dest-backimage"></img>
            {!(savedlocations.find((loc) => loc._id === location._id)) &&  <span className="overlay" style={{left:"87%", fontSize:"20px"}} onClick={() => AddToSavedLocations(location._id)}><i class="far fa-heart"></i></span>}
            {(savedlocations.find((loc) => loc._id === location._id)) &&  <span className="overlay" style={{left:"87%", fontSize:"20px"}} onClick={() => AddToSavedLocations(location._id)}><i class="fas fa-heart"></i></span>}
            <div className="destination-info">
                <div>
                <p className="mx-1 dest-name">{location.city}</p>
                <p className="mx-1 dest-area"><span class="icon"><i class="fas fa-map-marker-alt marker"></i></span>{location.address}</p>
            </div>
            <div>
                    <ul className="mx-175 dest-text">
                        <li><Link to={`/destination/${id}`} class="active" style={{color: "#6F7789"}}>About</Link></li>
                        <li><Link to={`/blogscreen/${id}`} class="loc-hover" style={{color: "#6F7789"}}>Blogs</Link></li>
                        <li><Link to={`/blogscreen/${id}`} class="loc-hover" style={{color: "#6F7789"}}>Photos</Link></li>
                        <li><Link to={`/videos/${id}`} class="loc-hover" style={{color: "#6F7789"}}>Videos</Link></li>
                    </ul>
            </div>
            <div>
                <p className="mx-1 dest-name" style={{fontSize: "0.9rem", marginTop: "1.5rem"}}>Description</p>
                <p className="mx-1 dest-p">{location.about? location.about.substring(0,5): ''}<span><Link to="/" className="font-yellow"> Read More</Link></span></p>
            </div>
            <div>
                <div className="text">
                    <p>Top Travel Experts</p>
                    <Link to="/travelexperts/rating">View All</Link>
                </div>
                <div className="Slide">
                <Slider {...settings2}>
                    { travelexperts? 
                        travelexperts.map((Travelexpert) => (
                            <TravelExpert key={Travelexpert._id} TravelExpert={Travelexpert}></TravelExpert>
                        )) : ""
                    }
                </Slider>
                </div>
            </div>
            {/* <div>
                <div class="text">
                    <p>Top Locals</p>
                    <a href="/">View All</a>
                </div>
                <div class="Slide pb-4">
                <Slider {...settings2}>
                    {
                        TravelExperts.TravelExp.map((Travelexpert) => (
                            <TravelExpert key={Travelexpert._id} TravelExpert={Travelexpert}></TravelExpert>
                        ))
                    }
                     </Slider>
                </div>
            </div> */}
            </div>
        </div>
    )
}
