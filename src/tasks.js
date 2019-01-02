import C from '../constants';

export const task = (state = {}, action) => {
	switch(action.type){
		case C.ADD:
			return [
				{
					id: action.id,
					text: action.text,
					createdAt: action.createdAt,
					status: action.status,
					priority: action.priority
				},
				...state
			]
		case C.TOGGLE_STATUS:
			let status = (state.status == 'active') ? 'complit' : 'active';
			return {
				...state,
				status
			}
		case C.TOGGLE_PRIORITY:
			let priority = (state.priority == 'low') ? 'high' : 'low';
			return {
				...state,
				priority
			}
		default:
			return state
	}
}
