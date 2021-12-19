import React from 'react'

export default function WholeIteneraryScreen() {
    return (
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Fixed Itinerary</p>
            </div>
            <div className='mx-1'>
            {[...Array(5)].map((x,i) =>(
                    <div>
                    <div style={{display:"flex", alignItems:"center", height:"25px"}}>
                        <span className='blue-circle2'><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                        <div className='day'>Day {i + 1}</div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <div className='blue-side-border2 px-1 py-2' style={{left:"10px"}}>
                        <p className='itinery-name'>The perfect sunrise in paradise</p>
                        <img src="/images/tajmahal.jpg" alt="img" className='image-box'></img>
                        <p className='dest-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra netus justo amet tristique rhoncus. Purus a adipiscing nec neque eget tincidunt lacus amet neque. Mattis ridiculus enim neque loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra netus justo amet tristique</p>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
