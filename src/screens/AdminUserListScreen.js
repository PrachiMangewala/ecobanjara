import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {getAllUsers, signout} from '../actions/userActions'
import { useNavigate } from 'react-router-dom';

export default function AdminUserListScreen() {
    const usersList = useSelector((state) => state.usersList);
    const { loading, error, users } = usersList;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const userDelete = useSelector((state) => state.userDelete);
    // const {
    //     loading: loadingDelete,
    //     error: errorDelete,
    //     success: successDelete,
    // } = userDelete;
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const signoutHandler = () => {
        dispatch(signout());
        navigate("/signin")
    }

    // const deleteHandler = (user) => {
    //     if (window.confirm('Are you sure?')) {
    //         dispatch(deleteUser(user._id));
    //     }
    // };

    return (
        <div className="container-fluid py-2">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} className='mx-1'>
            <h1 className="center my-3 font-blue">Users</h1>
            <div className='btn' style={{width:"63px", minHeight:"1.5rem"}} onClick={()=>{signoutHandler()}}>Log Out</div>
            </div>
            {/* {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            {successDelete && (
                <MessageBox variant="success">User Deleted Successfully</MessageBox>
            )} */}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table table-bordered table-hover font-blue">
                    <thead>
                        <tr className='font-blue'>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">MOBILE No.</th>
                            <th scope="col">Role</th>
                            {/* <th scope="col">ACTIONS</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobileNo}</td>
                                <td>{user.role}</td>
                                {/* <td>
                                    <button
                                        type="button"
                                        className="btn btn-dark mx-1"
                                        onClick={() => deleteHandler(user)}
                                    >
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
