import React from 'react';

export default ({tasks = [], onToggleComplited = f => f}) =>
	<div className='task-list'>
		{
			(tasks.length !== 0) ? tasks.map((task, i) => <Task onComplited={() => onToggleComplited(task.id)} key={task.id} {...task} />) : ''
		}
	</div>

const Task = ({text, complited, onComplited=f=>f}) =>
	<div onClick={onComplited} className='task-item'>{text} - {complited.toString()}</div>
