import React from 'react'
import $ from 'jquery'

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
    },
    getUser(email){
        $.ajax({
            method: "POST",
            url: "http://54.153.15.7:8080/user/info/",
            data: JSON.stringify({email: email}),
            dataType: 'json',
            crossDomain: true,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            },
            success: function(data) {
                this.setState({user : data})
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(xhr.responseText);
            }.bind(this)
        });
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
