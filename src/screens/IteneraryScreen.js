import React from 'react';
import {Link} from 'react-router-dom';

export default function IteneraryScreen() {
    return (
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Add Itineraries</p>
            </div>
            <div>
                <p className='connect' style={{color: "#121212"}}>A Fairytale in Rishikesh</p>
                <p className='connect' style={{color: "#00365B"}}>Rs 299/- </p>
            </div>
            <div>
                <p className="mx-1 dest-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu amet tempor, in massa, habitasse habitasse fermentum, sed faucibus. Augue arcu, ac proin accumsan urna morbi diam nunc, tincidunt. Ac turpis amet vitae dui aliquam vitae nunc. Non enim, lorem duis maecenas odio <Link to="/" className="font-yellow"> Read More</Link></p>
            </div>
            <div>
                <p className="mx-1 connect my-2"><span class="icon"><i class="fas fa-map-marker-alt marker"></i></span>Locations visited</p>
                <div className="location-container mx-1">
                    <div className="location-box">Rishikesh, Uttarakhand</div>
                    <div className="location-box">Kasol, HP</div>
                </div>
            </div>
            <div>
                <p className='connect mx-1'>5D / 4N</p>
                <div className='mx-1' style={{display: "flex", flexWrap: "wrap"}}>
                    {[...Array(5)].map((x,i) =>(
                        <div style={{display: "flex", alignItems: "center", marginBottom: "1rem"}}>
                            <span className='blue-circle2'><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                            {(i===4)?
                            <div></div>
                            :(
                                <div className='bottom-blue'></div>
                            )    
                        }
                        </div>
                    ))}
                </div>
                <div className="mx-1 my-1">
                    <button className='btn'>Add Itinerary</button>
                </div>
            </div>
        </div>
    )
}
