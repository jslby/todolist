import C from '../constants';
import {v4} from 'uuid';

export const addTask = text =>
	({
		type: C.ADD,
		id: v4(),
		text,
		createdAt: new Date().getTime(),
		status: true,
		priority: 'low'
	})

export const removeTask = id =>
	({
		type: C.REMOVE,
		id
	})

export const toggleComplited = id =>
	({
		type: C.TOGGLE_COMPLITED,
		id
	})

export const tooglePriority = (id, priority) =>
	({
		type: C.TOGGLE_PRIORITY,
		id,
		priority
	})
