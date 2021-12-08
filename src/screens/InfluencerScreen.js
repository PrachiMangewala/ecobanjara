import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function InfluencerScreen() {
    const [image] = useState(process.env.PUBLIC_URL +  'images/profile.png')
    return (
        <div>
            <div className="display-flex my-1 mx-1">
                <img src={image} alt="hello" className="image" style={{width:"4rem", height:"4rem"}}></img>
                <p className="name-i">Kiran Tej</p>
                <p className="city">Rohini, Delhi</p>
                <div className="d-flex-row">
                    <img src={process.env.PUBLIC_URL +  'images/premiumicon.png'} alt="premium-icon" className="premium-icon"></img>
                    <div className="city" style={{margin:"0"}}>Premium Traveller</div>
                </div>
            </div>
            <div className="influencer-stuff py-1 px-1">
                <div className="rating-component">
                    <p className="heading">Rating:</p>
                    <p className="star-icon"><i class="fas fa-star"></i><span style={{fontWeight: "500", fontSize: "12px", color: "#6F7789", marginLeft: "0.3rem"}}>4.8</span></p>
                    <p className="reviews"><Link to="/" style={{color: "#FC7E00"}}>Reviews</Link></p>
                </div>
                <div className="rating-component">
                <p className="heading" style={{fontSize: "0.8rem"}}>Languages Known:</p>
                <p className="city" style={{fontSize: "0.6rem", margin:"0"}}>Hindi, Punjabi, English</p>
                </div>
                <div className="city">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </div>
                <div className="connect-icons">
                    <Link to="/"><img src={process.env.PUBLIC_URL +  'images/insta.png'} alt="insta"></img></Link>
                    <Link to="/"><img src={process.env.PUBLIC_URL +  'images/youtube.png'} alt="youtube"></img></Link>
                    <Link to="/"><img src={process.env.PUBLIC_URL +  'images/web.png'} alt="web"></img></Link>
                </div>
                <div>
                    <div class="influencer-travel">
                        <p>My Best Travel Stories</p>
                        <a href="/">View All</a>
                    </div>
                    <div className="city">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </div>
                </div>
                <div class="influencer-travel" style={{fontWeight: "400", padding: "0 1rem"}}>
                    <p>Instagram</p>
                    <p>|</p>
                    <p>Trivago</p>
                </div>
                <div class="influencer-travel">
                    <p>Destinations Travelled</p>
                    <a href="/">View All</a>
                </div>
                <div>
                   <img src="images/tajmahal.jpg" alt="img" className="blog-image" style={{width:"60.44px", height:"64px"}}></img>
                   <p class="Name" style={{margin:"0"}}>Rishikesh</p>
                </div>
                <div class="influencer-travel">
                    <p>Fixed Itenaries</p>
                    <a href="/">View All</a>
                </div>
                <div class="d-flex my-1" style={{backgroundColor: "#FFFFFF"}}>
                    {/* blogs.map(blog) */}
                    <img src="images/tajmahal.jpg" alt="img" className="blog-image"></img>
                <div>
                    <div style={{marginBottom: "1rem"}}>
                        <p className="dest-name" style={{margin: "0 0 0 0.5rem", color:"#121212"}}>User Driven</p>
                        <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}></i></span>Uttarakhand</p>
                    </div>
                    <div className="blog-p">
                     3N/4D itenary
                    </div>
                </div>
                </div>
                <div className="fixed-bar">
                    <p style={{marginRight:"0.5rem"}}>Plan your trip with me</p>
                    <button className="btn">Connect</button>
                </div>
            </div>
        </div>
    )
}
