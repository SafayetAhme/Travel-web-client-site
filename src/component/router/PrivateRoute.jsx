/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;