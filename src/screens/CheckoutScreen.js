import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function CheckoutScreen() {
    const location = useLocation();
    const navigate = useNavigate();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [userId] = useState(location.state.userId);
    const influencerId = userId;
    // const [type] = useState(location.state.type);
    const [destinations] = useState(location.state.destinations);
    const [destinationsWhole] = useState(location.state.destinationsWhole);
    const [trip] = useState(location.state.trip);
    const [price] = useState(String(location.state.price));
    console.log(price);
    const [image] = useState(process.env.PUBLIC_URL + '/images/profile.png')
    console.log(userId)
    const travelexpertsList = useSelector((state) => state.travelexpertsList);
    const { travelexperts } = travelexpertsList;
    const TravelExpert = travelexperts.find((travelexpert) => travelexpert._id === userId);
    // console.log(travelexperts);
    function loadRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK failed to load. Are you online?')
        }
        script.onload = async () => {
            try {
                const result = await axios.post('https://ecobanjarabackend.herokuapp.com/api/itinerary/order/custom', { influencerId, destinations, price, trip },
                    {
                        headers: {
                            "x-access-token": `${userInfo.accessToken}`,
                        }
                    });
                console.log(result);    
                const { amount, id, currency } = result.data;
                const options = {
                    key: 'rzp_test_vuVpE4Rt5weTYa',
                    amount: amount.toString(),
                    currency: currency,
                    name: userInfo.data.name,
                    description: `Custom Itinerary with Travel Expert ${TravelExpert.name}`,
                    order_id: id,
                    handler: async function (response) {
                        console.log(response.razorpay_order_id);
                        console.log(response.razorpay_signature);
                        const result = await axios.post('https://ecobanjarabackend.herokuapp.com/api/itinerary/order/purchase/custom', {
                            orderCreationId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                            influencerId: userId,
                            destinations: destinations,
                            price: price,
                            trip: trip
                        }, {
                            headers: {
                                "x-access-token": `${userInfo.accessToken}`,
                            }
                        });
                        console.log(result);
                        alert(response.razorpay_payment_id);
                        if(typeof response.razorpay_payment_id === 'undefined' || response.razorpay_payment_id <1){
                            alert('Payment not successful')
                        }else{
                            alert('Payment Successful');
                            navigate(`/chat/influencer/${influencerId}`)
                        }
                    },
                prefill: {
                    name: userInfo.data.name,
                    email: userInfo.data.email,
                    contact: userInfo.data.mobileNo,
                },
                notes: {
                    address: 'example address'
                },
                theme: {
                    color: "#00365B",
                }
                };
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (err) {
                alert(err);
            }
        }
        document.body.appendChild(script);
    }

    return (
        <div className='py-1 px-1'>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect'>Checkout</p>
            </div>
            <div>
                <p className='heading-locs' style={{ fontSize: "16px", textDecoration: "underline" }}>Personalized Itinerary Summary</p>
                <p className='heading-locs mt-2' style={{ fontSize: "14px" }}>Travel Expert:</p>
                <div style={{ display: "flex" }}>
                    <img className="expertImage" src={TravelExpert.profileImg ? TravelExpert.profileImg : image} alt="img"></img>
                    <p className='heading-locs' style={{ fontSize: "14px", fontWeight: "500", marginLeft: "1rem" }}>{TravelExpert.name}</p>
                </div>
                <div>
                    <p className='heading-locs mt-2' style={{ fontSize: "14px" }}>Locations</p>
                    <div className="location-container">
                        {
                            destinationsWhole.map((destination) => (
                                <div className="location-box">{destination.address}</div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className='heading-locs mt-2' style={{ fontSize: "14px" }}>Duration</p>
                    <p className='heading-locs' style={{ fontSize: "14px", fontWeight: "500" }}>{trip} Days</p>
                </div>
                <div className='mt-2 mb-4' style={{ textAlign: "center", color: "#333333" }}>
                    This is where your journey begins with Triponvo, Bon Voyage!<span><img src={process.env.PUBLIC_URL + '/images/yoyo.png'} alt="logo" style={{ position: "relative", top: "5px", left: "5px" }}></img></span>
                </div>
                <div className='add-new my-1'><Link to="/couponcode">Have a coupon code?</Link></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ color: "#000000", opacity: "0.6", letterSpacing: "0.2px", fontWeight: "600" }}>Total Amount</div>
                    <div>
                        <div style={{ textAlign: "right", color: "#000000", letterSpacing: "0.2px", fontWeight: "600", fontFamily: "Montserrat" }}>Rs {price}/-</div>
                        <div className='add-new' style={{ color: "#00365B" }}>(inclusive of all charges)</div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn mt-2" style={{ padding: "10px", display: "flex", justifyContent: "space-between" }} onClick={loadRazorpay}>
                        <p>Proceed to pay</p>
                        <p><i className="fas fa-chevron-right"></i></p>
                    </button>
                    <div className='terms'><p>Terms & Conditions</p></div>
                </div>
            </div>
        </div>
    )
}
