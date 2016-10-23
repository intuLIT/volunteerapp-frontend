/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well} from 'react-bootstrap';
import Select from 'react-select';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Geosuggest from 'react-geosuggest'
import 'react-select/dist/react-select.css';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        // Set up initial state
        this.state = {
            volunteers: 50,
            category: null
        };
        this.handleVolunteerChange = this.handleVolunteerChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }
    handleVolunteerChange(e){
        this.setState({volunteers: e.target.value})
    };
    handleCategoryChange(e){
        this.setState({category: e})
    };
    handleLocationChange(e){
        this.setState({location: e})
    };
    render() {
        return (
            <div>
                <MainNavbar/>
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
                                        <br />
                                        <Row>
                                            <Col sm={6}>
                                                <ReactBootstrapSlider
                                                    value={this.state.volunteers}
                                                    slideStop={this.handleVolunteerChange}
                                                    step={1}
                                                    max={200}
                                                    min={1}
                                                    orientation="horizontal"
                                                    reverse={true}
                                                />
                                            </Col>
                                            <Col sm={6}>
                                                <h2 style={{margin:'0px'}}>{this.state.volunteers}</h2>
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
}

export default CreateEvent
