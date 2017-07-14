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
  register,
} from '../../actions/auth';

// css
import './css/login.css';

class Register extends Component {

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  addNotification(message, level, position) {
    this._notificationSystem.addNotification({
      message: message,
      level: level,
      position: position,
    });
  }

  onSubmit = (values) => {
    const registrationObj = {
      email: values.email,
      password: values.password,
      password_confirmation: values.password
    }
    this.props.register(registrationObj).then(() => {
      if(!!this.props.registerError) {
        this.addNotification(this.props.registerError, 'error', 'tc')
      }
      else {
        browserHistory.push('/login')
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
                          buttonName="Sign In"
                    />
                    <NotificationSystem ref="notificationSystem" />
                  </div>
               	</div>
              </div>
              <div className="col-md-6">
                <Link className="auth-link" to='/login'>Log In</Link>
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
    registerError: state.auth.error,
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    register,
  }, dispatch)
}

// Decorate the form component
Register = reduxForm({
  form: 'registerForm' // a unique name for this form
})(Register);

export default connect(mapStateToProps, dispatchToProps)(Register);
