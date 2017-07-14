import React from 'react'
import {browserHistory} from 'react-router'
import {removeToken} from '../../helpers/auth'
class Home extends React.Component {

  logOut = () => {
    removeToken()
    browserHistory.push('/login')
  }

  render () {
    return (
      <div>
        Hello
        <h1 onClick={this.logOut}>log out click here</h1>
      </div>
    )
  }
}

export default Home
