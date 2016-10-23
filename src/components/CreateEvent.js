/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import Select from 'react-select';
import ReactBootstrapSlider from 'react-bootstrap-slider';
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
                    <p>Let's make your project successful!</p>
                    <form>
                        <FormGroup>
                            <ControlLabel>Name</ControlLabel>
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
                            <FormControl
                                type="text"
                                placeholder="Enter a location"
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
                            <ControlLabel>Number of Volunteers</ControlLabel>
                            <br />
                            <ReactBootstrapSlider
                                value={this.state.volunteers}
                                slideStop={this.handleVolunteerChange}
                                step={1}
                                max={200}
                                min={1}
                                orientation="horizontal"
                                reverse={true}
                            />
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
                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </Grid>
            </div>
        )
    }
}

export default CreateEvent
