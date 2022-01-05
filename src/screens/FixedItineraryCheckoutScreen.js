import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { getTravelExpert } from '../actions/travelexpertsActions';
import axios from 'axios';

export default function FixedItineraryCheckoutScreen() {
    const location = useLocation();
    const [fixedItinerary] = useState(location.state.fixedItinerary);
    const [itinararyId] = useState(fixedItinerary? fixedItinerary._id: "")
    const influencerId = useState(fixedItinerary? fixedItinerary.influencer: "");
    // console.log(influencerId[0]);
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const travelExpertInfo = useSelector((state) => state.travelExpertInfo);
    const { travelexpert } = travelExpertInfo;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getTravelExpert(influencerId[0]));
    });

    function loadRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK failed to load. Are you online?')
        }
        script.onload = async () => {
            try {
                const result = await axios.post('https://ecobanjarabackend.herokuapp.com/api/itinerary/order/fixed', { itinararyId },
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
                    description: `Custom Itinerary with Travel Expert ${travelexpert.data.name}`,
                    order_id: id,
                    handler: async function (response) {
                        // console.log(response.razorpay_order_id);
                        // console.log(response.razorpay_signature);
                        const result = await axios.post('https://ecobanjarabackend.herokuapp.com/api/itinerary/order/purchase/fixed', {
                            orderCreationId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                            itinararyId: itinararyId
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
                            // navigate(`/chat/${userInfo.data._id}/${influencerId}`, );
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

    return ( travelexpert && fixedItinerary?
        <div>
            <div className='py-1 px-1'>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect'>Checkout</p>
            </div>
            <div>
                <p className='heading-locs' style={{ fontSize: "16px", textDecoration: "underline" }}>Custom Itinerary Summary</p>
                <p className='heading-locs mt-2' style={{ fontSize: "14px" }}>Travel Expert:</p>
                <div style={{ display: "flex" }}>
                    <img className="expertImage" src={image} alt="img"></img>
                    <p className='heading-locs' style={{ fontSize: "14px", fontWeight: "500", marginLeft: "1rem" }}>{travelexpert.data? travelexpert.data.name : ""}</p>
                </div>
                <div>
                    <p className='heading-locs mt-2' style={{ fontSize: "14px" }}>Locations</p>
                    <div className="location-container">
                        {/* {
                            destinationsWhole.map((destination) => (
                                <div className="location-box">{destination.address}</div>
                            ))
                        } */}
                    </div>
                </div>
                <div>
                    <p className='heading-locs mt-2' style={{ fontSize: "14px" }}>Duration</p>
                    <p className='heading-locs' style={{ fontSize: "14px", fontWeight: "500" }}>{fixedItinerary.content.length} Days</p>
                </div>
                <div className='mt-2 mb-4' style={{ textAlign: "center", color: "#333333" }}>
                    This is where your journey begins with Triponvo, Bon Voyage!<span><img src={process.env.PUBLIC_URL + '/images/yoyo.png'} alt="logo" style={{ position: "relative", top: "5px", left: "5px" }}></img></span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ color: "#000000", opacity: "0.6", letterSpacing: "0.2px", fontWeight: "600" }}>Total Amount</div>
                    <div>
                        <div style={{ textAlign: "right", color: "#000000", letterSpacing: "0.2px", fontWeight: "600", fontFamily: "Montserrat" }}>Rs {fixedItinerary.price}/-</div>
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
        </div>
        : ""
    )
}
