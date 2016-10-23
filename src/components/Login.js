/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, Button, Row, Col, Well} from 'react-bootstrap';
import 'react-select/dist/react-select.css';

const Login = React.createClass({
    getInitialState(){
        return ({
            email: null,
            pass: null
        })
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
                <MainNavbar/>
                <Grid>
                    <Row>
                        <Col sm={6} smOffset={3} md={4} mdOffset={4}>
                            <Well>
                                <h2 style={{marginTop: '15px', marginBottom: '20px', textAlign: 'center'}}>Login</h2>
                                <form>
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