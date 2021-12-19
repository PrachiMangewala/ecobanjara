import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function AddItenerariesScreen() {
    const location = useLocation();
    const [days] = useState(location.state.days);
    // console.log(days);
    // const i = 1; 
    const n = Number(days);
    console.log(n)
    return (
        <div className='mx-1 my-1'>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className='py-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                    <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                    <p className='connect' style={{color: "#000000"}}>Add Itineraries</p>
                </div>
                    <p className='heading-dest' style={{color: "#9C9C9C"}}>Next</p>
                </div>
                {[...Array(n)].map((x,i) =>(
                    <div>
                    <div style={{display:"flex", alignItems:"center", height:"25px"}}>
                        <span className='blue-circle'></span>
                        <div className='day'>Day {i + 1}</div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                    {(i===n-1) ? 
                    <div style={{height: "150px"}}></div>
                    :
                    <div>
                        <div className='blue-side-border'></div>
                    </div>
                    }
                    <Link to={`/iteneraryday/${i+1}`} className='add-new' style={{position:"relative", left:"53px", textDecoration:"underline"}}><span><i class="fas fa-plus" style={{marginRight: "0.1rem", fontSize: "0.6rem"}}></i></span>Add Day {i + 1} itenerary</Link>
                    </div>
                    </div>
                ))}
        </div>
    )
}
