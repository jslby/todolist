import React from 'react';
import {NewTask, VisibleTasks, ComplitedTasks} from '../containers/tasks.js';
import '../ui/App.scss';

export default () =>
	<div className='container'>
		<NewTask/>
		<div>Active</div>
		<VisibleTasks/>
		<div>Complited</div>
		<ComplitedTasks/>
	</div>
