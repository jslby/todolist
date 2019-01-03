import AddTaskForm from '../ui/AddTaskForm';
import C from '../constants.js';
import TaskList from '../ui/TaskList';
import {addTask, toggleComplited, toggleImportant} from '../actions/tasks';
import {connect} from 'react-redux';


export const NewTask = connect(
	null, 
	dispatch => ({
	 onNewTask(text){
		dispatch(addTask(text));
	 }
	})
)(AddTaskForm)

export const Tasks = connect(
	(state, {filter = C.FILTER_ACTIVE}) => ({
		tasks: [...state.tasks.filter(t => (filter === C.FILTER_ACTIVE) ? t.complited : !t.complited)]
	}),
	dispatch => ({
		onToggleComplited(id){
			dispatch(toggleComplited(id))
		},
		onToggleImportant(id){
			dispatch(toggleImportant(id))
		}
	})
)(TaskList)

export const ComplitedTasks = connect(
	state => ({
		tasks: [...state.tasks.filter(t => !t.complited)]
	}),
	dispatch => ({
		onToggleComplited(id){
			dispatch(toggleComplited(id))
		},
		onToggleImportant(id){
			dispatch(toggleImportant(id))
		}
	})
)(TaskList)
