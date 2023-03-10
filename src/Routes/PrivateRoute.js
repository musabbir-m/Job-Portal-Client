import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    let location= useLocation()

    if(loading) {
        return <div> <h2>Loading..</h2></div>
    }

    if(user && user.uid){
        return children;
    }
    return (
        <Navigate to='/login' state={ {from:location}} replace></Navigate>
    );
};

export default PrivateRoute;