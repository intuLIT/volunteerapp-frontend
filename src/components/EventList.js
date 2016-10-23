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
        this.setState({events : [{"event_id":1,"name":"Wiggle Waggle","nonprofit":0,"start_date":"10/29/16 12:00","end_date":"10/29/16 16:00","address":"875 Oklahoma Ave, San Luis Obispo, CA","zip":93405,"description":"Celebrate the human-animal bond and to raise money for homeless pets.","photo":"resources/img/wigglewaggle.png","min_volunteers":25,"max_volunteers":50},
            {"event_id":2,"name":"Tour the Piedras Blancas Light Station","nonprofit":1,"start_date":"11/5/16 8:00","end_date":"11/5/16 15:00","address":"3580 Sacramento Dr, San Luis Obispo, CA","zip":93401,"description":"Having a child with cancer is a life-altering event. Along with it, comes a level of stress and a financial burden. JHH steps in to help ease that burden. Hotel rooms, gas, and food are often provided when our treatment requires us to travel out of our area. We couldn't imagine our lives without JHH.","photo":"resources/img/mateo.jpg","min_volunteers":30,"max_volunteers":80},
            {"event_id":3,"name":"Action on Fistula","nonprofit":5,"start_date":"10/25/16 12:00","end_date":"10/25/16 15:00","address":"1922 The Alameda, Ste 302 San Jose, CA","zip":95126,"description":"This is the largest donation ever provided by any organisation or individual in the history of fistula","photo":"resources/img/fistula.jpg","min_volunteers":30,"max_volunteers":50},
            {"event_id":4,"name":"Wine 4 Paws","nonprofit":0,"start_date":"12/12/16 18:00","end_date":"12/12/16 20:00","address":"875 Oklahoma Ave, San Luis Obispo, CA","zip":93405,"description":"Come join us for wine night and play with your favorite animals!","photo":"resources/img/wine4paws.jpg","min_volunteers":5,"max_volunteers":10},
            {"event_id":5,"name":"Group and Individual Food Sorting Opportunities","nonprofit":7,"start_date":"12/3/16 17:00","end_date":"12/3/16 19:00","address":"San Carlos Distribution Site, 1051 Bing Street, San Carlos, CA","zip":94070,"description":"Individual opportunities are scheduled Mondays & Wednesdays from 12:00 p.m. to 3:00 p.m. and Tuesdays, & Fridays from 9:00 a.m. to 12:00 p.m.","photo":"resources/img/harvest.png","min_volunteers":20,"max_volunteers":70}]})
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
                <MainNavbar user={this.props.user} path={this.props.location.pathname}/>
                <Grid>
                    <Row>
                        <Col sm={10} smOffset={1}>
                            <Well>
                                <h2>Local Volunteer Events</h2>
                                <p>Make a difference in your community by volunteering.</p>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Event Name</th>
                                        <th>Organization</th>
                                        <th>Date/Time</th>
                                        <th>Location</th>
                                        <th>Volunteers Needed</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.events.map(function(event){
                                        return (
                                            <tr>
                                                <td>{event.name}</td>
                                                <td>{event.nonprofit}</td>
                                                <td>{event.start_date} - {event.end_date}</td>
                                                <td>{event.zip}</td>
                                                <td>{(event.min_volunteers == event.max_volunteers) ? event.min_volunteers :
                                                    event.min_volunteers + " - " + event.max_volunteers}</td>
                                            </tr>
                                        )
                                    })}
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
