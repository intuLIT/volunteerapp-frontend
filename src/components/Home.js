import React, { PropTypes } from 'react'
import MainNavbar from './MainNavbar'
import {Grid, Jumbotron} from 'react-bootstrap';

class Home extends React.Component {
    render() {
      const { query } = this.props
      var centerStyle = {
          textAlign: "center",
      };

        return (
            <div>
                <MainNavbar/>
                <Grid>
                    <p>Welcome to our website homepage!</p>
                    <Jumbotron>
                      <h1 style={centerStyle}
                          onClick={query}>
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

Home.propTypes = {
  query: PropTypes.func
}

export default Home
