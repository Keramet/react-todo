import { FILTER } from '../actions/types';
import { filter } from '../constant'

export default (state = filter.all, action) => {
	if (action.type === FILTER) {
		console.log('filterReducer...', action.payload);
		return action.payload;
	}
	return state;
};
