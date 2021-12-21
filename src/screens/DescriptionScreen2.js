import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getItineraryPrice } from '../actions/fixedItineraryActions';

export default function DescriptionScreen2() {
    const {id} = useParams();
    const [days, setDays] = useState(0);
    const [name, setName] = useState(0);
    const [description, setDescription] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const [destinations] = useState(location.state.destinations);
    const [destinationsWhole] = useState(location.state.destinationsWhole);
    const ItineraryPrice = useSelector((state) => state.ItineraryPrice);
    const { price } = ItineraryPrice; 
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userId = id;
    const [trip, setTrip] = useState("");
    const type = "CUSTOM"

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(days);
        navigate(`/itinerary/addperdayiteneraries/${id}`, {state:{destinations:destinations, noofDays: days, type:type, trip: trip, itineraryName: name, description: description, price:price}})
    };

    useEffect(()=>{
        if(userInfo && userId && destinations && days && type){
        if(days<=3){
            setTrip("0-3")
        } else if(days>3 && days <=7){
            setTrip("4-7")
        } else if(days>7 && days<=10){
            setTrip("8-10")
        } else if(days>10 && days<=15){
            setTrip("11-15")
        }else{
            setTrip("15+")
        }
        dispatch(getItineraryPrice(userInfo, userId, destinations, trip, type));
    }},[dispatch, userInfo, userId, destinations, trip, type, days]);

    // console.log(days);
    // console.log(name);
    // console.log(description);
    // console.log(destinations);
    // console.log(price);
    // console.log(trip);

    return (
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Add Itineraries</p>
            </div>
            <div className='py-1 px-1' style={{backgroundColor: "#EFEFEF"}}>
            <div>
                <p className="heading-dest">Locations</p>
                <div className="location-container">
                    {
                        destinationsWhole.map((destination) => (
                            <div className="location-box">{destination.address}</div>
                        ))
                    }
                </div>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <label className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}} htmlFor='name'>Add name for your Itinerary</label>
                    <input type="text" className='iten-input' placeholder='Enter name' id="name" onChange={ e => setName(e.target.value)} required></input>
                    <label htmlFor="province" className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}}>Duration of Itinerary</label>
                    <select name="province" id="province" className='select iten-input' placeholder='Select duration of itinerary' onChange={ e => setDays(e.target.value)} required>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                    </select>
                    <label className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}} htmlFor="price">Price of Itinerary</label>
                    <div>Rs {price? price : ""}/-</div>
                    <label className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}} htmlFor="description">Description</label>
                    <textarea id="description" name="bio" rows="5" maxLength={1000} className="textarea" placeholder="Enter Description" style={{marginBottom: "1rem", color: "#B6B6B6"}} onChange={ e => setDescription(e.target.value)} required></textarea>
                    <button className='btn'>Next</button>
                </form>
            </div>
            </div>
        </div>
    )
}
