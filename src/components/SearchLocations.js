import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import Slider from 'react-slick';
import { listLocations } from '../actions/locationActions';
// import Location from './location';
import LocationBox from './LocationBox';

export default function SearchLocations({placeholder, data}) {
    const[filteredData, setFilteredData] = useState([]);
    const[wordEntered, setWordEntered] = useState("");
    // const locationsList = useSelector((state) => state.locationsList);
    // const { locations} = locationsList;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listLocations(userInfo));
      },[dispatch, userInfo]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.city.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        <div>
            <div className='search-box my-1' style={{marginBottom:"2rem"}}>
            <input type="text" placeholder="Search for a location" className='search' value={wordEntered} onChange={handleFilter} style={{width:"100%"}}></input>
            {filteredData.length === 0 ?
               <i class="fas fa-search search-icon"></i>
               :
               <i class="fas fa-times search-icon" onClick={clearInput}></i>
            }
            </div>
            {filteredData.length!==0 && (
            <div className='dataResult'>
                    <div className='py-1' style={{paddingBottom:"300px"}}>
                    <div class="text">
                    <p style={{margin:"0"}}>Search Results</p>
                    </div>
                    <div className='px-1'>
                    {
                    filteredData.slice(0,5).map((value, key) => {
                        return(
                            <div key={value._id}>
                                <LocationBox key={value._id} location={value}></LocationBox>
                            </div>
                        )
                    })
                }
                </div>
                </div>
            </div>
            )}
        </div>
    )
}
