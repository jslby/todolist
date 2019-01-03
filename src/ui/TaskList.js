import React from 'react';

export default ({tasks = [], onToggleComplited, onToggleImportant}) =>
	<div className='task-list'>
		{(tasks.length !== 0) ? 
				tasks.map((task, i) => <Task onImportant={() => onToggleImportant(task.id)} onComplited={() => onToggleComplited(task.id)} key={task.id} {...task} />) : null
		}
	</div>

const Task = ({text, important, complited, onComplited, onImportant}) =>
	<div className='task-item'>
		{text}
		<p style={{zIndex: 10, fontSize: '13px', textDecoration: 'underline', cursor: 'pointer'}} onClick={onComplited}>{(complited) ? 'To complited' : 'To Active'}</p>
		<p style={{zIndex: 10, fontSize: '13px', textDecoration: 'underline', cursor: 'pointer'}} onClick={onImportant}>{(!important) ? 'Set important' : 'Unset important'}</p>
	</div>
