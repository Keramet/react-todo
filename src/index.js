import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './App';
import store from './store';

window.__store = store;

store.subscribe(
	() => console.log(`State in changed. NewState: ${JSON.stringify(store.getState())}`)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
