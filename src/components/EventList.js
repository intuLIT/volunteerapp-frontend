/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import { Link } from 'react-router'
import {Grid, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well, Table} from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import $ from 'jquery';

const EventList = React.createClass({
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
    handleLocationChange(e){
        this.setState({location: e})
    },
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },
    componentWillMount() {
        console.log("running all...");
        $.ajax({
            method: "GET",
            url: "http://54.153.15.7:8080/event/all/",
            dataType: 'json',
            crossDomain: true,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            },
            success: function(data) {
                this.setState({data: data});
                console.log(data)
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(xhr.responseText);
            }
        });
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
                                    {this.state.data ? this.state.data.map(function(event){
                                        return (
                                            <tr key={event.id}>
                                                <td><Link to={'event/' + event.id + '/'}>{event.name}</Link></td>
                                                <td>{event.organization}</td>
                                                <td>{event.start_date} - {event.end_date}</td>
                                                <td>{event.location}</td>
                                                <td>{(event.min_volunteers === event.max_volunteers) ? event.min_volunteers :
                                                    event.min_volunteers + " - " + event.max_volunteers}</td>
                                            </tr>
                                        )
                                    }): null}
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
