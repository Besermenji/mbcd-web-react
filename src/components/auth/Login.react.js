import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';
import NotificationSystem from 'react-notification-system';

// components
import Form from './Form'
// actions
import {
  login,
} from '../../actions/auth';

// css
import './css/login.css';

class Login extends Component {

componentDidMount() {
  this._notificationSystem = this.refs.notificationSystem;
}

addNotification(event) {
  this._notificationSystem.addNotification({
    message: 'Login failed',
    level: 'error',
    position: 'tc',
  });
}

  onSubmit = (values) => {
    const {
      login,
      loginError,
    } = this.props;
    login(values).then(() => {
      if(!!loginError) {
        this.addNotification()
      }
      else {
        // redirect to a cool page
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
                    />
                    <NotificationSystem ref="notificationSystem" />
               		</div>
               	</div>
              </div>
              <div className="col-md-6">
                <p>facebook</p>
                <p>google</p>
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
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
  }, dispatch)
}

// Decorate the form component
Login = reduxForm({
  form: 'loginForm' // a unique name for this form
})(Login);

export default connect(mapStateToProps, dispatchToProps)(Login);
