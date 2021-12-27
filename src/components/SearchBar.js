import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { listLocations } from '../actions/locationActions';
import Location from './location';
import LocationBox from './LocationBox';

export default function SearchBar({placeholder, data}) {
    const[filteredData, setFilteredData] = useState([]);
    const[wordEntered, setWordEntered] = useState("");
    const locationsList = useSelector((state) => state.locationsList);
    const { locations} = locationsList;
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

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>
            <div className='search-box'>
            <input type="text" placeholder="Search" className='search' value={wordEntered} onChange={handleFilter}></input>
            {filteredData.length === 0 ?
               <i class="fas fa-search search-icon"></i>
               :
               <i class="fas fa-times search-icon" onClick={clearInput}></i>
            }
            </div>
            {filteredData.length!==0 && (
            <div className='dataResult'>
                    <div class="text">
                    <p style={{margin:"0"}}>Top Destinations</p>
                    </div>
                    <div class="Slide">
                    <Slider {...settings}>
                        {
                              locations.slice(0,5).map((location) => (
                                <Location key={location._id} location={location}></Location>
                            ))
                        }
                    </Slider>
                    </div>
                    <div className='py-2'>
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
