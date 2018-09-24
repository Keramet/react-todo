import React from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = () => {
	let todo;

  	const onSubmit = (e) => {
		e.preventDefault();
		console.log(todo.value);
		todo.value = '';
  	};
	return (
		<form onSubmit={onSubmit}>
			<label>New todo:</label>
			<input type="text" ref={input => todo = input} />
			<button type="submit">ADD</button>
		</form>
	);
};

AddTodoForm.propTypes = {};
AddTodoForm.defaultProps = {};

export default AddTodoForm;
