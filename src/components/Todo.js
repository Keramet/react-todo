import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Filter from './Filter';
import AddTodoForm from './AddTodoForm';
import toggleTodo from '../actions/toggleTodo';

import './Todo.css';

const Todo = ({ todos, filter, onToggleTodo }) => {
  const filtered = filter === 'all' ?
	  todos :
	  todos.filter(x => filter === 'completed' ? x.completed : !x.completed);

  return (
    <div>
		<br/>
		<AddTodoForm />
		<hr/>
		<Filter filterBy={filter}/>
		<h4>Todo list:</h4>
		<ul className="todo-list">
			{filtered.map(todo =>
				<li
					key={todo.title}
					onClick={() => onToggleTodo(todo.title)}
					className={todo.completed ? 'completed' : ''}
				>
					{todo.title}
				</li>
			)}
		</ul>
    </div>
  );
};

Todo.propTypes = {
	todos: PropTypes.array.isRequired,
	filter: PropTypes.string.isRequired,
	onToggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter, todos }) => ({ filter, todos });

const mapDispatchToProps = {
	onToggleTodo: title => toggleTodo(title),
};


export default connect(mapStateToProps, mapDispatchToProps)(Todo);