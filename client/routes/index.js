import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import FlashMessagesList from '../components/flash/FlashMessagesList'

import App from '../components/App'
import SignupPage from '../components/signup/SignupPage'
import Greetings from '../components/Greetings'

export default () => (
    <BrowserRouter>
        <div>
            <NavigationBar />
            <FlashMessagesList />
            <Switch>
                <Route path="/greetings" exact component={Greetings} />
                <Route path="/signup" exact component={SignupPage} />
                <Route component={Greetings} />
            </Switch>
        </div>
       
    </BrowserRouter>
)