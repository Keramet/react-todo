import { FILTER } from './types';

// const changeFilter = filter => dispatch =>  dispatch({ type: FILTER, payload: filter });

const changeFilter = filter => ({ type: FILTER, payload: filter });


export default changeFilter;