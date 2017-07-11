import React from 'react';
import { Field } from 'redux-form';


//components
import { customField } from '../common/customField.react';

// helpers
import * as validates from '../../helpers/form_validation';

const TodoList = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>

      <div className="form-group">
        <Field name="email"
               type="email"
               component={customField} label="Email"
               className="form-control"
               validate={[validates.required, validates.email]}
         />
      </div>

      <div className="form-group">
        <Field name="password"
               type="password"
               label="password"
               component={customField}
               className="form-control"
               validate={[validates.required, validates.password]}
        />
      </div>
      <button type="submit" className="btn btn-default pull-right">
        Submit
      </button>

    </form>
  );
}

export default TodoList;
