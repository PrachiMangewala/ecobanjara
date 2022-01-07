import React, { useState } from 'react';
import {Link, useLocation, useNavigate, } from 'react-router-dom';
import { getLangNameFromCode, getLangCodeList } from 'language-name-map'


export default function InfluencerDetailsPage2() {
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [languagesBox, setLanguagesBox] = useState(false);
    const [bio, setBio] = useState('');
    const [story, setStory] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [email] = useState(location.state.email);
    const [password] = useState(location.state.password);
    const [name] = useState(location.state.name);
    const [profileImg] = useState(location.state.profileImg);
    const [dob] = useState(location.state.dob);
    const [mobileNo] = useState(location.state.mobileNo);
    const [address] = useState(location.state.address);
    const [city] = useState(location.state.city);
    const [state] = useState(location.state.state);
    const [gender] = useState(location.state.gender);
    // console.log(profileImg);
    // console.log(gender);
    const list = getLangCodeList();
    // console.log(list);
    const handleSelect = (selectedItem) => {
        if(selectedLanguages.length>0){
            for(let i=0; i<selectedLanguages.length; i++){
                const locationindex = selectedLanguages.find((language) => language === selectedItem);
                console.log(locationindex);
                if(locationindex){
                    const newLanguages = selectedLanguages.filter((language) => language !== selectedItem);
                    setSelectedLanguages(newLanguages);
                    console.log(selectedLanguages)
                }else{
                    setSelectedLanguages([...selectedLanguages, selectedItem])
                }
            }
            console.log(selectedLanguages)
        }else{
            setSelectedLanguages([...selectedLanguages, selectedItem])
            console.log(selectedLanguages)
        }
    }

    const showLanguagesBox = () => {
        setLanguagesBox(!languagesBox);
    }

    const goToLanguagesPage = () => {
        navigate('/enterdetails/page3/influencer', {state:{email:email, password:password, name:name, profileImg:profileImg, dob:dob, mobileNo:mobileNo, city:city, address:address, state:state, gender:gender, bio:bio, story:story, languages:selectedLanguages}})
    }

    return (
        <div className='py-1 px-1'>
            <form onSubmit={goToLanguagesPage}>
            <div className='my-2'>
                    <div style={{ display: "flex", alignItems: "center",justifyContent: "space-between" }}>
                        <p className='desc-text'>Languages Known</p>
                        <p className='add-new' onClick={showLanguagesBox}>Add new<span><i className="fas fa-plus" style={{marginLeft: "0.1rem", fontSize: "0.6rem"}}></i></span></p>
                    </div>
                    <div className='language-container'>
                        {selectedLanguages? (
                            (selectedLanguages.length!==0) ?(
                        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                            {selectedLanguages.map((language) => (
                                <div className='language-box add-new' style={{color: "#00365B"}}><img src="/images/lang.png" alt="lang" className="image-lang"></img>{language}</div>
                            ))}
                        </div>    
                            ) : <div>Add Languages</div>
                        ) : <div>Add Languages</div>
                        }
                        </div>
                        {languagesBox?
                            <div className='popup-box'>
                                <div style={{maxWidth:"320px", maxHeight:"80vh", overflowX:"scroll"}} className='popup-inner px-1'>
                                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                        <div>Languages</div>
                                        <div className="close-icon"><i className="fas fa-times" onClick={() => setLanguagesBox(false)}></i></div>
                                    </div>
                                    {
                                        list?
                                        list.map((code)=> (
                                            <div>
                                                <div>
                                                    <input type="checkbox" id={getLangNameFromCode(`${code}`).name} name="lang" value={getLangNameFromCode(`${code}`).name} onChange={(e) => {handleSelect(e.target.value)}}></input>
                                                    <label htmlFor={getLangNameFromCode(`${code}`).name}>{getLangNameFromCode(`${code}`).name}</label>
                                                </div>
                                            </div>
                                        ))
                                        : ""
                                    }
                                    </div>
                                    </div>
                            : ""
                        }                    
                </div>
                <div className="form-group">
                    <label className="form-heading">My Bio</label>
                    <textarea id="bio" name="bio" rows="5" maxLength={1000} className="textarea" placeholder='Enter description' onChange={(e) => setBio(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label className="form-heading">My Best Travel Story</label>
                    <textarea id="travel" name="travel" rows="5" maxLength={2000} className="textarea" placeholder='Enter your best travel story' onChange={(e) => setStory(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn" style={{minWidth:"100%"}}>Next</button>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} className='my-1'>
                    <Link to="/">Previous</Link>
                    <Link to="/">Add Later</Link>
                </div>
                </form>
        </div>
    )
}
