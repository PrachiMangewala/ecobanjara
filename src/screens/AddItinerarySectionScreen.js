import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function AddItinerarySectionScreen() {
    const {day} = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(startTime);
        console.log(endTime);
        console.log(title);
        console.log(description);
        const start = startTime.split(":")
        console.log(start);
        const end = endTime.split(":")
        console.log(end);
        if(start[0]>end[0]){
            console.log('hello');
        }else if(start[0]===end[0] && start[1]>end[1]){
            console.log('bye')
        }else{
            console.log('wohooo')
        }
    };

    return (
        <div className='py-1 px-1'>
            <div className='py-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Day {day}</p>
            </div>
            <div className='form-container py-1 px-1'>
            <form onSubmit={submitHandler}>
                    <div style={{display:"flex"}}>
                    <div style={{marginRight: "1rem"}}>
                    <label className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}}>Start time</label>
                    <input type="time" className='iten-input' placeholder='Enter start time' onChange={ e => setStartTime(e.target.value)} required></input>
                    </div>
                    <div>
                    <label className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}}>End time</label>
                    <input type="time" className='iten-input' placeholder='Enter end time' onChange={ e => setEndTime(e.target.value)} required></input>
                    </div>
                    </div>
                    <label className="heading-dest" style={{color: "#00365B", marginBottom: "0.5rem"}}>Title of the activity</label>
                    <input type="text" className='iten-input' placeholder='Enter the title' onChange={ e => setTitle(e.target.value)} required></input>
                    <label className="heading-dest" style={{color: "#00365B", margin: "1rem 0 0.5rem 0"}}>Description</label>
                    <textarea id="bio" name="bio" rows="5" maxLength={1000} className="textarea" required style={{marginBottom: "1rem"}} placeholder='Enter description' onChange={ e => setDescription(e.target.value)}></textarea>
                    <button className='btn'>Save</button>
            </form>
            </div>

        </div>
    )
}
