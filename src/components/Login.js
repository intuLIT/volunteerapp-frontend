/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, Button, Row, Col} from 'react-bootstrap';
import 'react-select/dist/react-select.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        // Set up initial state
        this.state = {
            volunteers: 50,
            category: null
        };
        this.handleVolunteerChange = this.handleVolunteerChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }
    handleVolunteerChange(e){
        this.setState({volunteers: e.target.value})
    };
    handleCategoryChange(e){
        this.setState({category: e})
    };
    render() {
        return (
            <div>
                <MainNavbar/>
                <Grid>
                    <Row>
                        <Col sm={6} smOffset={3} md={4} mdOffset={4}>
                            <h2>Login</h2>
                            <form>
                                <FormGroup>
                                    <FormControl
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
                                <Button type="submit">
                                    Submit
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Login