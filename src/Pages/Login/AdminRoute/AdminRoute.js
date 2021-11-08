import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoding } = useAuth();
    if (isLoding) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;