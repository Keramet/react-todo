import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Filter from './Filter';
import AddTodoForm from './AddTodoForm';

import './Todo.css';

const Todo = ({ todos, filter }) => {
  const filtered = filter === 'all' ?
	  todos :
	  todos.filter(x => filter === 'completed' ? !x.completed : x.completed);

  return (
    <div>
		<br/>
		<AddTodoForm />
		<hr/>
		<Filter filterBy={filter}/>
		<h4>Todo list:</h4>
		<ul>
			{filtered.map(todo =>
				<li	key={todo.title} className={todo.completed ? 'completed' : ''}>
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
};

const mapStateToProps = ({ filter, todos }) => ({ filter, todos });


export default connect(mapStateToProps)(Todo);