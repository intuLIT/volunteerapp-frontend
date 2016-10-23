import React from 'react'
import MainNavbar from './MainNavbar'
import {Grid} from 'react-bootstrap';

class Test extends React.Component {
    render() {
        return (
            <div>
                <MainNavbar />
                <Grid>
                    <p>This is a test route!!</p>
            </Grid>
            </div>
        )
    }
}

export default Test
