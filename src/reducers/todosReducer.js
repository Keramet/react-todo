import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

const todosReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					title: action.payload,
					completed: false,
				},
			];
		case TOGGLE_TODO:
			console.log('toggleing todo. Action:', action);
			return state;
		default:
			return state;
	}
};

export default todosReducer;
