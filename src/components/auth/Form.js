import React from 'react'
import { Field } from 'redux-form'

// components
import { customField } from '../common/customField.react'

// helpers
import * as validates from '../../helpers/form_validation'

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>

      <div className='form-group'>
        <Field name='email'
          type='email'
          component={customField} label='Email'
          className='auth-input'
          validate={[validates.required, validates.email]}
         />
      </div>

      <div className='form-group'>
        <Field name='password'
          type='password'
          label='password'
          component={customField}
          className='auth-input'
          validate={[validates.required, validates.password]}
        />
      </div>
      <button type='submit'
        className='pull-right auth-submit'
        disabled={props.submitInProgress}
      >
        {props.buttonName}
      </button>

    </form>
  )
}

export default Form
