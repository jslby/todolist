import C from '../constants';
import {v4} from 'uuid';

export const addTask = text =>
	({
		type: C.ADD,
		id: v4(),
		text,
		createdAt: new Date().getTime(),
		complited: true,
		important: false
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

export const toggleImportant = (id) =>
	({
		type: C.TOGGLE_IMPORTANT,
		id,
	})
