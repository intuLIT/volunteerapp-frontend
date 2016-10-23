/**
 * Created by reese on 10/22/16.
 */
import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well} from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class AddOrganization extends React.Component {
    constructor(props) {
        super(props);
        // Set up initial state
        this.state = {
            volunteers: 50,
            category: null
        };
        this.handleVolunteerChange = this.handleVolunteerChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleCauseChange = this.handleCauseChange.bind(this);
    }
    handleVolunteerChange(e){
        this.setState({volunteers: e.target.value})
    };
    handleCategoryChange(e){
        this.setState({category: e})
    };
    handleCauseChange(e){
        this.setState({cause: e})
    };
    render() {
        return (
            <div>
                <MainNavbar/>
                <Grid>
                    <Row>
                        <Col sm={8} smOffset={2}>
                            <Well>
                                <h2>Tell Us About Your Organization</h2>
                                <p>Let's get volunteers and make your projects successful!</p>
                                <form>
                                    <FormGroup>
                                        <ControlLabel>Organization Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter text"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Location</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter a location"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Organization Type</ControlLabel>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.category}
                                            multi={false}
                                            options={[
                                                { value: 'school', label: 'School' },
                                                { value: 'community', label: 'Community Group' },
                                                { value: 'non-profit', label: 'Non-Profit Organization' }
                                            ]}
                                            onChange={this.handleCategoryChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Organization Logo</ControlLabel>
                                        <FormControl
                                            id="formControlsFile"
                                            type="file"
                                            label="File"
                                            help="Select a .jpg or .png image that shows you organization logo"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Which Causes Do You Primarily Support?</ControlLabel>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.cause}
                                            multi={true}
                                            options={[
                                                { value: 'one', label: 'One' },
                                                { value: 'two', label: 'Two' }
                                            ]}
                                            onChange={this.handleCauseChange}
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

export default AddOrganization
