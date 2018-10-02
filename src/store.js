import { createStore } from 'redux';
import { filter } from './constant';
import rootReducer from './reducers';

const initialState = {
	todos: [
		{
			title: 'Read Design Patterns',
			completed: false,
		},
		{
			title: 'Watch video',
			completed: true,
		},
	],
	filter: filter.all,
};

export default createStore(
	rootReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
