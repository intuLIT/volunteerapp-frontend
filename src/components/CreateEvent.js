/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well} from 'react-bootstrap';
import Select from 'react-select';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Geosuggest from 'react-geosuggest'
var Slider = require('rc-slider');
require('rc-slider/assets/index.css');
import 'react-select/dist/react-select.css';


const CreateEvent = React.createClass({
    getInitialState(){
        return ({
            volunteers: [1, 20],
            category: null
        })
    },
    handleVolunteerChange(e){
        this.setState({volunteers: e})
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
                        <Col sm={8} smOffset={2}>
                            <Well>
                                <h2>Create a New Event</h2>
                                <p>Let's get volunteers and make your projects successful!</p>
                                <form>
                                    <FormGroup>
                                        <ControlLabel>Event Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter text"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="formControlsTextarea">
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="Tell volunteers what your event supports and why you need them!" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Location</ControlLabel>
                                        <Geosuggest
                                            placeholder="Enter a location..."
                                            onSuggestSelect={this.handleLocationChange}
                                            types={['geocode']}
                                            country="US"
                                            inputClassName="form-control"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Sponsor(s)</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Is anyone supporting the event?"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Number of Volunteers Needed</ControlLabel>
                                        <Slider range allowCross={false} defaultValue={[1, 20]} onChange={this.handleVolunteerChange} />
                                        <br />
                                        <Row>
                                            <Col sm={8}>
                                                <ReactBootstrapSlider
                                                    value={this.state.volunteers}
                                                    slideStop={this.handleVolunteerChange}
                                                    change={this.handleVolunteerChange}
                                                    step={1}
                                                    max={200}
                                                    min={1}
                                                    orientation="horizontal"
                                                    reverse={true}
                                                />
                                            </Col>
                                            <Col sm={4}>
                                                <h3 style={{margin:'0px'}}>{this.state.volunteers[0] + " - " + this.state.volunteers[1]} volunteers</h3>
                                            </Col>
                                        </Row>
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

export default CreateEvent
