import C from '../constants';

export const tasks = (state = [], action) => {
	switch(action.type){
		case C.ADD:
			return [
				{
					id: action.id,
					text: action.text,
					createdAt: action.createdAt,
					complited: action.complited,
					important: action.important
				},
				...state
			]
		case C.TOGGLE_COMPLITED:
			return state.map(task => 
				task.id === action.id ?
					{...task, complited: !task.complited} : task
			)
		case C.TOGGLE_IMPORTANT:
			return state.map(task =>
				task.id === action.id ?
				{...task, important: !task.important} : task
			)
		case C.REMOVE:
			return state.filter(task => task.id !== action.id)
		default:
			return state
	}
}
