import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { StitchAuthProvider } from 'components/Auth/StitchAuth'
import * as serviceWorker from './serviceWorker'
import * as Sentry from '@sentry/browser'
import './index.css'

import App from 'App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

Sentry.init({
  dsn: 'https://266d4489fe284b61a90dea2ea9689b28@sentry.io/1877567',
  release: 'dev' // TODO see https://docs.sentry.io/workflow/releases/?_ga=2.225325146.1970574778.1579103240-1392631938.1578668509&platform=javascript#configure-sdk
})

ReactDOM.render(
  <StitchAuthProvider>
    <Router>
      <App />
    </Router>
  </StitchAuthProvider>
  ,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
