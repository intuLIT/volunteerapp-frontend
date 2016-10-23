import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid, Jumbotron} from 'react-bootstrap';


class Home extends React.Component {
    render() {
        const centerStyle = {
            'textAlign': 'center'
        };
        return (
            <div>
                <MainNavbar/>
                <Grid>
                    <p>Welcome to our website homepage!</p>
                    <Jumbotron>
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
}

export default Home
