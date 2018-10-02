import { TOGGLE_TODO } from './types';

const toggleTodo = title => ({
	type: TOGGLE_TODO,
	payload: title,
});

export default toggleTodo;