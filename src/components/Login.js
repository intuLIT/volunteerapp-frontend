/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, Button, Row, Col, Well} from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import 'react-select/dist/react-select.css';
import {hashHistory} from 'react-router';
import $ from 'jquery';

const Login = React.createClass({
    responseFacebook(response){
      console.log(response);
    },
    getInitialState(){
        return ({
            email: null,
            pass: null
        })
    },
    componentWillMount(){
        const user = this.props.user;
        if (user && user.name){
            hashHistory.push('/event-list')
        }
    },
    handleEmailChange(e){
        this.setState({volunteers: e.target.value})
    },
    handlePassChange(e){
        this.setState({category: e})
    },
    modifyState(newState){
        this.setState(newState);
    },
    render() {
        return (
            <div>
                <MainNavbar user={this.props.user} path={this.props.location.pathname}/>
                <Grid>
                    <Row>
                        <Col sm={6} smOffset={3} md={4} mdOffset={4}>
                            <Well>
                                <h2 style={{marginTop: '15px', marginBottom: '20px', textAlign: 'center'}}>Login</h2>
                                <form>
                                    <FormGroup>
                                        <FacebookLogin
                                            appId="549004031970669"
                                            autoLoad={true}
                                            fields="name,email,picture"
                                            onClick={(e) => console.log(e)}
                                            cssClass="btn btn-facebook"
                                            callback={this.responseFacebook} />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl
                                            onChange={(e) => this.modifyState({email: e.target.value})}
                                            type="email"
                                            label="Email address"
                                            placeholder="Enter email"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl
                                            onChange={(e) => this.modifyState({pass: e.target.value})}
                                            id="formControlsPassword"
                                            label="Password"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </FormGroup>
                                    <Button bsStyle="primary" bsSize="large" block type="submit" onClick={(e) => {e.preventDefault(); this.props.getUser(this.state.email)}}>
                                        Submit
                                    </Button>
                                </form>
                            </Well>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default Login
