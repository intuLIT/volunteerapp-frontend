/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well, Table} from 'react-bootstrap';
import Select from 'react-select';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Geosuggest from 'react-geosuggest'
import 'react-select/dist/react-select.css';
import $ from 'jquery';

const EventList = React.createClass({
    getInitialState(){
    return ({
            volunteers: 50,
            category: null
        })
    },
    componentWillMount(){

    },
    handleVolunteerChange(e){
        this.setState({volunteers: e.target.value})
    },
    handleCategoryChange(e){
        this.setState({category: e})
    },
    handleLocationChange(e){
        this.setState({location: e})
    },
    render() {
        return (
            <div>
                <MainNavbar/>
                <Grid>
                    <Row>
                        <Col sm={10} smOffset={1}>
                            <Well>
                                <h2>Local Volunteer Events</h2>
                                <p>Let's get volunteers and make your projects successful!</p>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Event Name</th>
                                        <th>Organization</th>
                                        <th>Date/Time</th>
                                        <th>Location</th>
                                        <th>Distance</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Well>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default EventList
