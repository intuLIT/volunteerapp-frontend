import React from 'react';
import MainNavbar from './MainNavbar';
import {Grid, Jumbotron, Row, Col, Table, Well} from 'react-bootstrap';
import $ from 'jquery';


const Home = React.createClass({
    getInitialState(){
        return({data: null})
    },
    componentWillMount(){
        $.ajax({
            method: "GET",
            url: "http://vlntr-api.reesewoodard.com:8080/event/all/",
            dataType: 'json',
            crossDomain: true,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            },
            success: function(data) {
                data ? this.setState({data: data.slice(0, 4)}) : null;
                console.log(data)
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(xhr.responseText);
            }
        });
    },
    render() {
        const centerStyle = {
            'textAlign': 'center'
        };
        return (
            <div>
                <MainNavbar user={this.props.user} path={this.props.location.pathname}/>
                <Grid>
                    <Row>
                        <Col sm={10} smOffset={1}>
                            <Jumbotron style={{background: 'rgba(255,255,255,.90)'}}>
                                <h1 style={centerStyle}>
                                    Vlntr
                                </h1>
                                <p style={centerStyle}>
                                    crowd-sourcing for volunteers
                                </p>
                            </Jumbotron>
                            <Well>
                                <h3>Here Are a Few of Our Events!</h3>
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
                                                <td>{event.name}</td>
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

export default Home
