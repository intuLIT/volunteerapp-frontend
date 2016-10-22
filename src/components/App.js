import React from 'react'
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome!</h2>
                <Link to="test">Test</Link>
                {this.props.children}
            </div>
        )
    }
}

export default App
