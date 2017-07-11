import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

// components
import Form from './Form'
// actions
import {
  register,
} from '../../actions/auth';

// css
import './css/login.css';

class Register extends Component {

  onSubmit = (values) => {
    console.log(values)
    const registrationObj = {
      email: values.email,
      password: values.password,
      password_confirmation: values.password
    }
    this.props.register(registrationObj);
  }

 render() {
   const {
     handleSubmit,
   } = this.props
   return (
     <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-4 login-margin-top">
            <div className="row">
              <div className="col-md-6 login-border">
                <div className="row">
               		<div className="col-md-12">
               			<Form handleSubmit={handleSubmit(this.onSubmit)}/>
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
