import React from 'react'
import $ from 'jquery'
import {hashHistory} from 'react-router';

const App = React.createClass({
    getInitialState(){
        return ({
            user: {}
        })
    },
    componentWillMount(){
        document.body.style.backgroundImage = "url('back-image.jpg')";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        localStorage.getItem('user') !== null ?
        this.setState({user : JSON.parse(localStorage.getItem('user'))}) : null;
    },
    getUser(email){
        if (email == null){
            this.setState({user : null});
        }
        else {
            const reactThis = this;
            $.ajax({
                method: "POST",
                url: "http://vlntr-api.reesewoodard.com:8080/user/info/",
                data: JSON.stringify({email: email}),
                dataType: 'json',
                crossDomain: true,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                },
                success: function (data) {
                    reactThis.setState({user: data});
                    localStorage.setItem('user', JSON.stringify(data));
                    hashHistory.push('event-list');
                },
                error: function (xhr, status, err) {
                    console.error(xhr.responseText);
                }
            });
        }
    },
    render() {
        return (
            <div>
                {this.props.children && React.cloneElement(this.props.children, {
                    user: this.state.user,
                    getUser: this.getUser
                })}
            </div>
        )
    }
});

export default App
