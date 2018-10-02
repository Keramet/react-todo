import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addTodo from '../actions/addTodo';

const AddTodoForm = ({ onAddTodo }) => {
	let todo;

  	const onSubmit = (e) => {
		e.preventDefault();
		onAddTodo(todo.value);
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

AddTodoForm.propTypes = {
	onAddTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	onAddTodo: addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
