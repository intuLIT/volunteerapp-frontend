/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well} from 'react-bootstrap';

const Signup = React.createClass({
    getInitialState(){
        return ({
            volunteers: 50,
            category: null
        })
    },
    handleVolunteerChange(e){
        this.setState({volunteers: e.target.value})
    },
    handleCategoryChange(e){
        this.setState({category: e})
    },
    render() {
        return (
            <div>
                <MainNavbar/>
                <Grid>
                    <Row>
                        <Col sm={6} smOffset={3} md={4} mdOffset={4}>
                            <Well>
                            <h2 style={{marginTop: '15px', marginBottom: '20px', textAlign: 'center'}}>Signup</h2>
                                <form>
                                    <Row>
                                        <Col sm={6}>
                                            <FormGroup>
                                                <ControlLabel>First Name</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    placeholder="Enter text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm={6}>
                                            <FormGroup>
                                                <ControlLabel>Last Name</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    placeholder="Enter text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <ControlLabel>Email</ControlLabel>
                                        <FormControl
                                            type="email"
                                            label="Email address"
                                            placeholder="Enter email"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Password</ControlLabel>
                                        <FormControl
                                            id="formControlsPassword"
                                            label="Password"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Location</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter a location"
                                        />
                                    </FormGroup>
                                    <Button bsStyle="primary" bsSize="large" block type="submit">
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

export default Signup
