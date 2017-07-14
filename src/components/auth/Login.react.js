import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';
import NotificationSystem from 'react-notification-system';
import { browserHistory, Link } from 'react-router'

// components
import Form from './Form'
// actions
import {
  login,
  removeRegisterFlag,
} from '../../actions/auth';

// css
import './css/login.css';

class Login extends Component {

componentDidMount() {
  this._notificationSystem = this.refs.notificationSystem;

  if (this.props.fromRegister) {
    this.addNotification('Success! Please Log In to continue!','success','tc')
    this.props.removeRegisterFlag()
  }
}

addNotification(message, level, position) {
  this._notificationSystem.addNotification({
    message: message,
    level: level,
    position: position,
  });
}

  onSubmit = (values) => {
    this.props.login(values).then(() => {
      if(!!this.props.loginError) {
        this.addNotification(this.props.loginError, 'error', 'tc')
      }
      else {
        browserHistory.push('/')
      }
    })
  }

 render() {
   const {
     handleSubmit,
     inProgress,
   } = this.props
   return (
     <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-4 login-margin-top">
            <div className="row">
              <div className="col-md-6 login-border">
                <div className="row">
               		<div className="col-md-12">
               			<Form handleSubmit={handleSubmit(this.onSubmit)}
                          submitInProgress={inProgress}
                          buttonName="Log In"
                    />
                    <NotificationSystem ref="notificationSystem" />
               		</div>
               	</div>
              </div>
              <div className="col-md-6">
                <Link className="auth-link" to='/register'>Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
     	</div>
   );
 }
}
const mapStateToProps = (state) => {
  return {
    inProgress: state.auth.inProgress,
    loginError: state.auth.error,
    fromRegister: state.auth.fromRegister,
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    removeRegisterFlag,
  }, dispatch)
}

// Decorate the form component
Login = reduxForm({
  form: 'loginForm' // a unique name for this form
})(Login);

export default connect(mapStateToProps, dispatchToProps)(Login);
