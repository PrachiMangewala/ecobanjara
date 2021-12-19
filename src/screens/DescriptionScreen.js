import React from 'react'
import {Link} from 'react-router-dom';

export default function DescriptionScreen() {
    return (
        <div className='px-1 py-1'>
            <div>
                <div style={{ display: "flex", alignItems: "center",justifyContent: "space-between" }}>
                    <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                    <p className='connect'>Save</p>
                </div>
                <div>
                    <p className='desc-text'>See what best describes you</p>
                    <form>
                        <label class="container radio-text">I am a Luxury Traveller
                            <input type="radio" name="radio-button" />
                            <span class="checkmark2"></span>
                        </label>

                        <label class="container radio-text">I am a Budget Traveller
                            <input type="radio" name="radio-button" />
                            <span class="checkmark2"></span>
                        </label>

                        <label class="container radio-text">I am a xxxxx Traveller
                            <input type="radio" name="radio-button" />
                            <span class="checkmark2"></span>
                        </label>
                    </form>
                </div>
                <div>
                    <div style={{ display: "flex", alignItems: "center",justifyContent: "space-between" }}>
                        <p className='desc-text'>Languages Known</p>
                        <p className='add-new'>Add new<span><i class="fas fa-plus" style={{marginLeft: "0.1rem", fontSize: "0.6rem"}}></i></span></p>
                    </div>
                    <div className='language-container'>
                        <div className='language-box add-new' style={{color: "#00365B"}}><img src="/images/lang.png" alt="lang" className="image-lang"></img>Hindi</div>
                        <div className='language-box add-new' style={{color: "#00365B"}}><img src="/images/lang.png" alt="lang" className="image-lang"></img>Punjabi</div>
                        <div className='language-box add-new' style={{color: "#00365B"}}><img src="/images/lang.png" alt="lang" className="image-lang"></img>English</div>
                    </div>
                </div>
                <div>
                    <p className='desc-text my-1'>My Bio</p>
                    <label for="bio"></label>
                    <textarea id="bio" name="bio" rows="10" maxLength={1000} className="textarea" required></textarea>
                </div>
                <div>
                    <div style={{ display: "flex", alignItems: "center",justifyContent: "space-between" }}>
                        <p className='desc-text'>Fixed 3N/4D Itineraries</p>
                        <p className='add-new'>Add new<span><i class="fas fa-plus" style={{marginLeft: "0.1rem", fontSize: "0.6rem"}}></i></span></p>
                    </div>
                    <div style={{border: "1px solid #D1D1D1", boxSizing: "border-box", borderRadius: "16px"}}>
                    <div class="d-flex" style={{backgroundColor: "#ffffff"}}>
                        <img src={process.env.PUBLIC_URL +  '/images/tajmahal.jpg'} alt="img" className="blog-image"></img>
                        <div style={{marginBottom: "1rem"}}>
                            <p className="dest-name" style={{margin: "0 0 0 0.5rem", color:"#121212"}}>User Driven</p>
                            <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}></i></span>Uttarakhand</p>
                            <p className="blog-area" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}>3N/4D itinerary</p>
                        </div>
                        <p className='price'>Rs 599/-</p>
                    </div>
                    <div class="d-flex" style={{backgroundColor: "#ffffff"}}>
                        <img src={process.env.PUBLIC_URL +  '/images/tajmahal.jpg'} alt="img" className="blog-image"></img>
                        <div style={{marginBottom: "1rem"}}>
                            <p className="dest-name" style={{margin: "0 0 0 0.5rem", color:"#121212"}}>User Driven</p>
                            <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}></i></span>Uttarakhand</p>
                            <p className="blog-area" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}>3N/4D itinerary</p>
                        </div>
                        <p className='price'>Rs 599/-</p>
                    </div>
                    </div>
                </div>
                <div className='social-handles'>
                    <div className='social'>
                        <img src="/images/insta2.png" alt='insta'></img>
                        <Link to="/" style={{color: "#ffffff",   marginLeft: "7px"}}>Connect your Instagram</Link>
                    </div>
                    <div className='social'>
                        <img src="/images/youtube2.png" alt='insta'></img>
                        <Link to="/" style={{color: "#ffffff",   marginLeft: "7px"}}>Connect your Youtube</Link>
                    </div>
                    <div className='social'>
                        <img src="/images/web2.png" alt='insta'></img>
                        <Link to="/" style={{color: "#ffffff",   marginLeft: "7px"}}>Connect your Website</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
