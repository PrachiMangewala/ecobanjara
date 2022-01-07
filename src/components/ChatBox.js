import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../actions/customItineraryActions';

export default function ChatBox(props) {
    const {sectionId} = props;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const sectionComments = useSelector((state) => state.sectionComments);
    const { comments } = sectionComments;
    const dispatch = useDispatch();
    console.log(comments);

    // useEffect(() => (
    //     dispatch(getComments(userInfo, sectionId))
    // ))
    
    return (
        <div>
           hello
        </div>
    )
}
