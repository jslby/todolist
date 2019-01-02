import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {render} from 'react-dom';
import App from './ui/App.js';

let unsubscribe = store.subscribe(() => console.log(store.getState()))

render(
	<Provider store={store}>
		<App/>
	</Provider>
, document.getElementById('root'))
