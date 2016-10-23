import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, FormGroup, FormControl, ControlLabel, Button, Row, Col, Well, Table} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import $ from 'jquery';


const EventPage = React.createClass({
    getInitialState() {
      return (){

      })
    },
    componentWillMount() {
      $.ajax({
          method: "GET",
          url: "http://54.153.15.7:8080/convert_event",
          data: JSON.stringify({id: this.props.routeParams.eventId}),
          dataType: 'json',
          crossDomain: true,
          beforeSend: function(xhr) {
              xhr.setRequestHeader('Content-Type', 'application/json');
          },
          success: function(data) {
            const event = JSON.parse(data);
            this.setState({...event})
          },
          error: function(xhr, status, err) {
              console.error(xhr.responseText);
          }
      });
    }
    render() {
        return (
          <div>
              <MainNavbar user={this.props.user} path={this.props.location.pathname}/>
              <Grid>
                  <Row>
                      <Col sm={8} smOffset={2}>
                          <Well>
                              <h1></h1>
                          </Well>
                      </Col>
                  </Row>
              </Grid>
          </div>
        )
    }

})
