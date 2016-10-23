import React from 'react'
import MainNavbar from './MainNavbar'
import {
  Grid,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Row,
  Col,
  Well,
  Table,
  Image,
  Panel,
  ProgressBar,
} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import $ from 'jquery';


const EventPage = React.createClass({
    getInitialState() {
      return ({

      })
    },
    componentWillMount() {
      let reactthis = this;
      $.ajax({
          method: "POST",
          url: "http://54.153.15.7:8080/convert_event",
          data: JSON.stringify({id: this.props.routeParams.eventId}),
          dataType: 'json',
          crossDomain: true,
          beforeSend: function(xhr) {
              xhr.setRequestHeader('Content-Type', 'application/json');
          },
          success: function(data) {
            console.log(data);
            reactthis.setState({...data})
          },
          error: function(xhr, status, err) {
              console.error(xhr.responseText);
          }
      });
    },
    addUser(uid,eid) {

    },
    render() {
        return (
          <div>
              <MainNavbar user={this.props.user} path={this.props.location.pathname}/>
              <Grid>
                  <Row>
                      <Col sm={8} smOffset={2}>
                          <Well>
                              <Row>
                                <Image src="https://avatars3.githubusercontent.com/u/1025028?v=3&s=60" circle />
                                <Col sm={6}>
                                  <h1>{this.state.name}</h1>
                                </Col>
                              </Row>
                              <FormGroup>
                                  <h4>{this.state.description}</h4>
                              </FormGroup>
                              <FormGroup>
                                <Row>
                                  <Col sm={12}>
                                    <ControlLabel><h4>Volunteers</h4></ControlLabel>
                                    <ProgressBar
                                        min={this.state.min_volunteers}
                                        max={this.state.max_volunteers}
                                        label={10}
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                    <Button
                                      bsStyle="primary"
                                      bsSize="large"
                                      block type="submit"
                                      onClick={(e) => {
                                          e.preventDefault();
                                          this.addUser(this.props.user.id, this.state.id)}
                                      }>
                                        Submit
                                    </Button>
                                </Row>
                              </FormGroup>
                              <FormGroup>
                                  <Row>
                                    <Col sm={12}>
                                      <ControlLabel><h4>Where</h4></ControlLabel>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col sm={12}>
                                      <Panel>{this.state.address}</Panel>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col sm={12}>
                                      <ControlLabel><h4>When</h4></ControlLabel>
                                    </Col>
                                    <Col sm={12}>
                                      <ControlLabel>Start</ControlLabel>
                                      <Panel>{this.state.start_date ? this.state.start_date: "Not set"}</Panel>
                                      <ControlLabel>End</ControlLabel>
                                      <Panel>{this.state.end_date ? this.state.end_date : "Not set"}</Panel>
                                    </Col>
                                  </Row>
                              </FormGroup>
                          </Well>
                      </Col>
                  </Row>
              </Grid>
          </div>
        )
    }

})
export default EventPage;
