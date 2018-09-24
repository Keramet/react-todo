import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { filter } from '../constant';
// import changeFilter from '../actions/changeFilter';
import Filter from './Filter';
import AddTodoForm from './AddTodoForm';

import './Todo.css';

const Todo = ({ todos, filter }) => {
  const isDisplay = completed => {
  	const predicat = filter === 'all' ? true : (filter === 'completed' ? completed : !completed);
  	console.log({ predicat, filter });
  };

  const filtered = todos.filter(x => isDisplay(x.completed));
  console.log(filtered);

  return (
    <div>
		<br/>
		<AddTodoForm />
		<hr/>
		<Filter filterBy={filter}/>
		<h4>Todo list:</h4>
		<ul>
			{filtered.map(todo =>
				<li
					key={todo.title}
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
};

const mapStateToProps = ({ filter, todos }) => ({ filter, todos });


export default connect(mapStateToProps)(Todo);