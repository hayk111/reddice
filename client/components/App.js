import React from 'react'
import { hot } from 'react-hot-loader'
import Routes from '../routes'
import { withRouter } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Routes />
                {this.props.children}
            </div>
        );
    }
}

export default hot(module)(App)