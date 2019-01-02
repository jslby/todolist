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

export const ActiveTask = connect(
	state => ({
		tasks: [...state.tasks]
	}),
	dispatch => ({
		onToggleComplited(id){
			dispatch(toggleComplited(id))
		}
	})
)(TaskList)
