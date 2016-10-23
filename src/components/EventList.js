/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import { Link , hashHistory} from 'react-router'
import {Grid, Form, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well, Table} from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import $ from 'jquery';
import moment from 'moment';

const EventList = React.createClass({
    getInitialState(){
    return ({
            zipCode: null
        })
    },
    handleZipCodeChange(e){
        this.setState({zipCode: e.target.value})
    },
    componentWillMount() {
        let zip = this.props.routeParams.zipCode;
        if (zip > 0){ // zip code looks valid
            this.setState({zipCode: zip})
        }
        this.getEvents(zip);
    },
    getEvents(zip){
        if (zip && zip.length > 4){
            $.ajax({
                method: "POST",
                url: "http://vlntr-api.reesewoodard.com:8080/event/nearby/",
                data: JSON.stringify({zip_code: zip}),
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
        }
        else {
            $.ajax({
                method: "GET",
                url: "http://vlntr-api.reesewoodard.com:8080/event/all/",
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
        }
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
                                <Row>
                                    <Col sm={6}>
                                        <p>Make a difference in your community by volunteering.</p>
                                    </Col>
                                    <Col sm={6}>
                                        <Form inline>
                                            <FormGroup controlId="formInlineEmail">
                                                <ControlLabel>Zip Code</ControlLabel>
                                                {' '}
                                                <FormControl type="text" placeholder="Ex. 93410" value={this.state.zipCode} onChange={this.handleZipCodeChange} />
                                            </FormGroup>
                                            {' '}
                                            <Button type="submit" onClick={(e) => {e.preventDefault(); hashHistory.push('/event-list/' + this.state.zipCode + '/'); this.getEvents(e.target.value);}}>
                                                Search
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Event Name</th>
                                        {/*<th>Date/Time</th>*/}
                                        <th>Location</th>
                                        <th>Volunteers Needed</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.data ? this.state.data.map(function(event){
                                        return (
                                            <tr key={event.id}>
                                                <td><Link to={'event/' + event.id + '/'}>{event.name}</Link></td>
                                                {/*<td>{event.start_date == event.end_date ? moment(event.start_date).format("MM/DD/YYYY") :
                                                moment(event.start_date).format("MM/DD/YYYY") - moment(event.start_date).format("MM/DD/YYYY")} </td>*/}
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
