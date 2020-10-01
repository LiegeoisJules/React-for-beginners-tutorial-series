import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './UserProvider';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {user} = useContext(UserContext);
    return (
        <Route
            {...rest} 
            render={routeProps => 
                !!user ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to='/signUp' />
                )
            }
        />
    );
}

export default PrivateRoute;