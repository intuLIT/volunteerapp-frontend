import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid} from 'react-bootstrap';


class Home extends React.Component {
    render() {
        return (
            <div>
                <MainNavbar />
                <Grid>
                    <p>Welcome to our website homepage!</p>
                </Grid>
            </div>
        )
    }
}

export default Home
