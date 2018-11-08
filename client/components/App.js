import React from 'react'
import { hot } from 'react-hot-loader'
import Greetings from './Greetings'

class App extends React.Component {
    render() {
        return (
            <Greetings />
        );
    }
}

export default hot(module)(App)