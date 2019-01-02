import AddTaskForm from '../ui/AddTaskForm';
import TaskList from '../ui/TaskList';
import {addTask, toggleComplited} from '../actions/tasks';
import {connect} from 'react-redux';


export const NewTask = connect(
	null, 
	dispatch => ({
	 onNewTask(text){
		dispatch(addTask(text));
	 }
	})
)(AddTaskForm)

export const VisibleTasks = connect(
	state => ({
		tasks: [...state.tasks.filter(t => t.complited)]
	}),
	dispatch => ({
		onToggleComplited(id){
			dispatch(toggleComplited(id))
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
		}
	})
)(TaskList)
