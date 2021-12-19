// import React, { useState } from 'react'
import locations from '../locations'

export default function ConnectScreen() {
    // const[bool, setBool] = useState(false);
    // function disappearIcon() {
    //     const elms = document.getElementsByClassName('plus');

    //     for (var i=0; i<elms.length; i+=1){
    //         elms[i].style.display = 'none';
    //     }
    // }
    return (
        <div className='py-1 px-1' style={{marginBottom: "1rem"}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect'>Connect</p>
            </div>
            <div>
                <p className='heading-locs'>Choose Location</p>
                <div className='wrap-locs'>
                    {
                        locations.Location.map((location) => (
                            <div className='location-comp'>
                                <span><i class="fas fa-plus plus"></i></span>
                                <p className='place'>{location.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div style={{marginBottom: "2rem"}}>
                <p className='heading-locs'>Timeline</p>
                <div>
                    <form>
                        <label class="container">0-3 Days
                            <input type="radio" name="radio-button" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">4-7 Days
                            <input type="radio" name="radio-button" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">8-10 Days
                            <input type="radio" name="radio-button" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">11-15 Days
                            <input type="radio" name="radio-button" />
                            <span class="checkmark"></span>
                        </label>
                    </form>
                </div>
            </div>
            <div>
                <p className='heading-locs'>Check call availaibility</p>
                <button type="submit" className="btn" style={{ marginBottom: "1rem", padding: "0" }}>Plan for 599/-</button>
                <button type="submit" className="btn" style={{ backgroundColor: "#DEDEDE", color: "#8B7F7F", padding: "0"
                }}>Explore Fixed Itenary</button>
            </div>
            <div className='wrap-locs'>
                    {
                        locations.Location.map((location) => (
                            <div className='location-comp'>
                                <label class="container" style={{fontStyle: "normal", fontWeight: "900", fontSize: "10px", display: "flex", alignItems: "center", letterSpacing: "0.03em", color: "#00365B"}}>{location.name}
                                    <input type="radio" name="radio-button" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}
