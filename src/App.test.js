import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { StitchAuthProvider } from "components/Auth/StitchAuth";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './index.css';

library.add(fab)

test('renders app', () => {
  render(
    <StitchAuthProvider>
      <Router>
        <App />
      </Router>
    </StitchAuthProvider>);
});
