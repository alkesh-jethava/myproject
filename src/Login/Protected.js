import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protected = ({ component: Component,...rest }) => (
    <Route
        {...rest}
        render = {
            (props) => (
                localStorage.getItem('actType') === '2'
                ?
                <Component {...props} />
                :
                <Redirect to={{
                    pathname: '/',
                    state: {
                        from: props.location
                    }
                }} />
            )
        }
    />
)

export default Protected;