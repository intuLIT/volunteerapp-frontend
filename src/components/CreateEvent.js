/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well} from 'react-bootstrap';
import Select from 'react-select';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Geosuggest from 'react-geosuggest';
import Datetime from 'react-datetime';
import moment from 'moment';
import $ from 'jquery'
var Slider = require('rc-slider');
require('rc-slider/assets/index.css');
import 'react-select/dist/react-select.css';


const CreateEvent = React.createClass({
    getInitialState(){
        return ({
            volunteers: [1, 20],
            category: null,
            name: null,
            location: null,
            locationZip: null,
            description: null,
            sponsors: null,
            startDate: null,
            endDate: null,
        })
    },
    handleVolunteerChange(e){
        this.setState({volunteers: e})
    },
    handleCategoryChange(e){
        this.setState({category: e})
    },
    handleLocationChange(e){
        this.setState({location: e.label})
        const zip = e.gmaps.address_components.filter((x) => x.types[0] == 'postal_code')
        this.setState({locationZip: zip.length > 0 ? zip[0].short_name: null})
    },
    handleDescriptionChange(e){
      this.setState({description: e})
    },
    handleEventNameChange(e) {
        this.setState({name: e})
    },
    handleSponsorsChange(e) {
        this.setState({sponsors: e})
    },
    handleStartDateChange(e) {
        this.setState({startDate: e})
    },
    handleEndDateChange(e) {
      this.setState({endDate: e})

    },
    submitEvent() {
      $.ajax({
          method: "POST",
          url: "http://54.153.15.7:8080/create_event",
          data: JSON.stringify({
              name: this.state.name,
              start_date: moment(this.state.startDate).format("YYYY-MM-DD HH:mm:ss"),
              end_date: moment(this.state.endDate).format("YYYY-MM-DD HH:mm:ss"),
              address: this.state.location,
              location: this.state.locationZip,
              description: this.state.description,
              min_volunteers: this.state.volunteers[0],
              max_volunteers: this.state.volunteers[1],
              organization: 1
            }),
          dataType: 'json',
          crossDomain: true,
          beforeSend: function(xhr) {
              xhr.setRequestHeader('Content-Type', 'application/json');
          },
          success: function(data) {
            console.log(data)
          }.bind(this),
          error: function(xhr, status, err) {
              console.error(xhr.responseText);
          }.bind(this)
      });
    },
    render() {
        return (
            <div>
                <MainNavbar user={this.props.user} path={this.props.location.pathname}/>
                <Grid>
                    <Row>
                        <Col sm={8} smOffset={2}>
                            <Well>
                                <h2>Create a New Event</h2>
                                <p>Let''s get volunteers and make your projects successful!</p>
                                <form>
                                    <FormGroup>
                                        <ControlLabel>Event Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter text"
                                            onChange={(e) => this.handleEventNameChange(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="formControlsTextarea">
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl
                                          componentClass="textarea"
                                          placeholder="Tell volunteers what your event supports and why you need them!"
                                          onChange={(e) => this.handleDescriptionChange(e.target.value)}
                                         />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Location</ControlLabel>
                                        <Geosuggest
                                            placeholder="Enter a location..."
                                            onSuggestSelect={(e) => {
                                              console.log(e)
                                              this.handleLocationChange(e)}
                                            }
                                            types={['geocode']}
                                            country="US"
                                            inputClassName="form-control"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={6}>
                                                <ControlLabel>Start Date</ControlLabel>
                                                <Datetime
                                                    onChange={(e) => this.handleStartDateChange(e.format("MM/DD/YYYY HH:mm"))}
                                                    inputProps={{
                                                        placeholder: "MM/DD/YYYY hh:mm"
                                                    }}
                                                />
                                            </Col>
                                            <Col sm={6}>
                                                <ControlLabel>End Date</ControlLabel>
                                                <Datetime
                                                    onChange={(e) => this.handleEndDateChange(e.format("MM/DD/YYYY HH:mm"))}
                                                    inputProps={{
                                                      placeholder:"MM/DD/YYYY hh:mm"
                                                    }}
                                                />
                                            </Col>
                                        </Row>

                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Sponsor(s)</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Is anyone supporting the event?"
                                            onChange={(e) => this.handleSponsorsChange(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Number of Volunteers Needed</ControlLabel>
                                        <Slider range allowCross={false} defaultValue={[1, 20]} onChange={this.handleVolunteerChange} />
                                        <br />
                                        <h3 style={{margin:'0px'}}>{this.state.volunteers[0] + " - " + this.state.volunteers[1]} volunteers</h3>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Cause Category</ControlLabel>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.category}
                                            multi={true}
                                            options={[
                                                { value: 'one', label: 'One' },
                                                { value: 'two', label: 'Two' }
                                            ]}
                                            onChange={this.handleCategoryChange}
                                        />
                                    </FormGroup>
                                    <Button bsStyle="primary"
                                            bsSize="large"
                                            block type="submit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.submitEvent()
                                              }}
                                            >
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

export default CreateEvent
