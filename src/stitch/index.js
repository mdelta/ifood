import { app } from './app'
import { restaurants } from './mongodb'
import {
  loginAnonymous,
  logoutCurrentUser,
  hasLoggedInUser,
  getCurrentUser
} from './authentication'

export { app, restaurants }
export { loginAnonymous, logoutCurrentUser, hasLoggedInUser, getCurrentUser }
