import {combineReducers, createStore} from 'redux';
import {tasks} from './reducers/tasks';

const initStore = {
	tasks: [ 
		{
			id: 0,
			text: '',
			createdAt: '',
			status: 'active', /* complit */
			priority: 'high' /* low default */
		}
	]
}

/*
 * У нас будет возможность добавлять новые задачи
 * удалять старые
 * менять статус у старых задачь
 */

const store = createStore(combineReducers({tasks}));

export default store;
