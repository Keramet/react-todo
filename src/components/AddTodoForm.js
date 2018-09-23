import React from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = () => {
  const onSubmit = (e) => {
	  console.log(e.target.value);
  };
  return (
    <form onSubmit={() => console.log()}>
		<label>To-do</label>
    </form>
  );
};

AddTodoForm.propTypes = {};
AddTodoForm.defaultProps = {};

export default AddTodoForm;