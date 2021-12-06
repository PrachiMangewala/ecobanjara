import React from 'react'

export default function BlogsScreen() {
    return (
        <div>
            <div>
            <span className="overlay" style={{padding: "6px 8px 6px 8px", left:"84%", backgroundColor:"#F3F3F3"}}><i class="fas fa-map-marker-alt loc-icon"></i></span>
            <div className="blog-nav">
                <p><i class="fas fa-chevron-left mx-1"></i></p>
                <div>
                <p className="dest-name" style={{marginBottom: "0"}}>Rishikesh</p>
                <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.9rem", paddingRight:"0"}}></i></span>Uttarakhand</p>
                </div>
            </div>
            <div>
                    <ul className="mx-175 dest-text">
                        <li><a href="/" class="loc-hover" style={{color: "#6F7789"}}>About</a></li>
                        <li><a href="/" class="active-blog">Blogs</a></li>
                        <li><a href="/" class="loc-hover" style={{color: "#6F7789"}}>Photo</a></li>
                        <li><a href="/" class="loc-hover" style={{color: "#6F7789"}}>Videos</a></li>
                    </ul>
            </div>
            <div className="my-2">
                <div class="mx-175 d-flex my-1">
                    <img src="images/tajmahal.jpg" alt="img" className="blog-image"></img>
                    <div>
                    <div style={{marginBottom: "1rem"}}>
                        <p className="dest-name" style={{margin: "0 0 0 0.5rem", color:"#121212"}}>Rishikesh</p>
                        <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}></i></span>Uttarakhand</p>
                    </div>
                    <div className="blog-p">
                    Lorem ipsum dolor sit amet, consectetur...
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
