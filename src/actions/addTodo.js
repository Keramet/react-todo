import { ADD_TODO } from './types';

const addTodo = title => ({
	type: ADD_TODO,
	payload: title,
});

export default addTodo;