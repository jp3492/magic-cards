import React from 'react'
import axios from 'axios'
import './app.scss'

import Amplify, { Auth } from 'aws-amplify'
import awsmobile from './aws-exports'

import { Authenticator, Greetings } from 'aws-amplify-react'

import Navigation from './components/navigation/navigation'
import Header from './components/header/header'
import Modal from './components/modal/modal'
import quantumState from './utils/quantum-state';

const oauth = {
  scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  responseType: 'code' // or token
}

Amplify.configure(awsmobile)
Auth.configure({ oauth })

axios.defaults.headers["accesstoken"] = localStorage.getItem("CognitoIdentityServiceProvider.6r66ulmr5c1k6ho1aag0hpohe7.jp.accessToken")
axios.defaults.headers["user"] = localStorage.getItem("user")

const App = props => (
  <div className="app">
    <Header />
    <div className="body">
      {props.children}
    </div>
    <Navigation />
    <Modal />
  </div>
)

export default function (props: any) {
  const [auth, setAuth] = quantumState("AUTH", localStorage["amplify-authenticator-authState"] || 'signedOut')
  const [_, setUser] = quantumState("USER", "", false)

  const handleAuth = state => {
    Auth.currentSession().then((res) => {
      setUser(res["idToken"].payload.sub)
      localStorage.setItem("user", res["idToken"].payload.sub)
      axios.defaults.headers["accesstoken"] = res["accessToken"].jwtToken
      axios.defaults.headers["user"] = res["idToken"].payload.sub
      setAuth(state)
    })
  }

  return (
    <Authenticator
      signUpConfig={{
        hiddenDefaults: ['phone_number']
      }}
      onStateChange={handleAuth}
      hide={[Greetings]}>
      {
        auth === "signedIn" &&
        <App {...props} />
      }
    </Authenticator>

  )
}