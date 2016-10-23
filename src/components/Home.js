import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, Jumbotron} from 'react-bootstrap';


const Home = React.createClass({
    render() {
        const centerStyle = {
            'textAlign': 'center'
        };
        return (
            <div>
                <MainNavbar/>
                <Grid>
                    <Jumbotron style={{background: 'rgba(255,255,255,.90)'}}>
                        <h1 style={centerStyle}>
                            Vlntr
                        </h1>
                        <p style={centerStyle}>
                            crowdsourcing volunteers
                        </p>
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
});

export default Home
