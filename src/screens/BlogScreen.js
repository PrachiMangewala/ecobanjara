import React from 'react'

export default function BlogScreen() {
    return (
        <div>
            <p><i class="fas fa-chevron-left mx-1 font-white"></i></p>
            <img src={process.env.PUBLIC_URL + "/images/tajmahal.jpg"} alt="img" className="dest-backimage" style={{height: "40vh"}}></img>
            <div className="background-blur">
                <p className="blur-font">Kinnaur Kailash</p>
                <p className="dest-area" style={{margin:"0 1rem"}}><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:"0.7rem"}}></i></span>Nepal</p>
            </div>
            <div className="mx-1 dest-p" style={{ position: "relative", top: "14rem"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing s
            </div>
        </div>
    )
}
