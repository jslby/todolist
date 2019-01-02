import React from 'react';
import {NewTask, ActiveTask} from '../containers/tasks.js';
import '../ui/App.scss';

export default () =>
	<div className='container'>
		<NewTask/>
		<ActiveTask/>
	</div>
