import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Routes from 'Routes'
import { StitchAuthContext } from 'components/Auth/StitchAuth'
import './index.css'

import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar'
import LoginPage from './views/LoginPage/LoginPage'
import Legal from './views/Legal/Legal'
import About from './views/About/About'
import Privacy from './views/Privacy/Privacy'

import background from 'assets/img/bg7.jpg'

class App extends Component {
  componentDidMount () {
    // change background image in case the components do not fill everything
    document.body.style.backgroundImage = 'url(' + background + ')'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100% '
    document.documentElement.style.height = '100% '
  }

  render () {
    const stitch = this.context

    return (
      <div>
        <ButtonAppBar loginStatus={stitch.isLoggedIn} logout={stitch.actions.onLogout} />
        <Switch>
          <Route exact path='/legal'>
            <Legal />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/privacy'>
            <Privacy />
          </Route>
          <Route>
            {stitch.isLoggedIn ? <Routes currentUser={stitch.currentUser} /> : <LoginPage />}
          </Route>
        </Switch>
      </div>
    )
  }
}

App.contextType = StitchAuthContext
export default App
