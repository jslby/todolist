import {combineReducers, createStore} from 'redux';
import {tasks} from './reducers/tasks';

const initStore = {
	tasks: [ 
		{
			id: 0,
			text: 'test task 1',
			createdAt: new Date().getTime(),
			complited: false,
			important: false /* low default */

		},
		{
			id: 1,
			text: 'test task 2',
			createdAt: new Date().getTime(),
			complited: true,
			important: false /* low default */

		},
		{
			id: 3,
			text: 'test task 3',
			createdAt: new Date().getTime(),
			complited: false,
			important: true /* low default */

		}


	]
}

const store = createStore(combineReducers({tasks}), initStore);
export default store;
