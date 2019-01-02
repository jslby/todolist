import C from '../constants';

export const tasks = (state = [], action) => {
	switch(action.type){
		case C.ADD:
			return [
				{
					id: action.id,
					text: action.text,
					createdAt: action.createdAt,
					complited: action.status,
					priority: action.priority
				},
				...state
			]
		case C.TOGGLE_COMPLITED:
			return state.map(task => 
				task.id === action.id ?
					{...task, complited: !task.complited} : task
			)
		default:
			return state
	}
}
