/**
 * Created by reese on 10/23/16.
 */
import React from 'react'
import {hashHistory} from 'react-router';

const Logout = React.createClass({
    getInitialState(){
        return ({
            email: null,
            pass: null
        })
    },
    componentWillMount(){
        this.props.getUser(null);
        localStorage.setItem('user', null);
        hashHistory.push('/');
    },
    render() {
        return (
            <div>
                <p>Logging you out...</p>
            </div>
        )
    }
});

export default Logout