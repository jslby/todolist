import React from 'react';
import C from '../constants';
import {NewTask, Tasks} from '../containers/tasks.js';
import '../ui/App.scss';

export default () =>
	<div className='container'>
		<NewTask/>
		<Tasks filter={C.FILTER_ACTIVE}/>
		<Tasks filter={C.FILTER_COMPLITED}/>
	</div>
