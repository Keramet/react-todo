import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

import './Todo.css';

const Todo = ({ data }) => {
  return (
    <div>
		<Filter filterBy={data.filter}/>
		<h3>Add todo</h3>
		<ul>
			{data.todos.map(todo =>
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
	data: PropTypes.object.isRequired,
};
Todo.defaultProps = {
	data: []
};

export default Todo;