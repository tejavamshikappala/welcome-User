import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {value: true, message: 'Please Login'}

  onChanging = () => {
    console.log('hey')
    this.setState({value: false, message: 'Welcome User'})
  }

  onLogout = () => {
    this.setState({value: true, message: 'Please Login'})
  }

  render() {
    const {value, message} = this.state
    let Auth
    if (value === true) {
      Auth = <Login onClick={this.onChanging} />
    } else {
      Auth = <Logout onClick={this.onLogout} />
    }
    return (
      <div className="for_Outer_container">
        <div className="for_inner">
          <Message Text={message} />
          {Auth}
        </div>
      </div>
    )
  }
}
export default Home
