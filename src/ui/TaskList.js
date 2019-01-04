import React from 'react';

export default ({tasks = [], onToggleComplited, onToggleImportant, onRemoveTask}) =>
  <div className='task-list'>
    {(tasks.length !== 0) ? 
        tasks.map((task, i) => 
          <Task 
          onRemove={() => onRemoveTask(task.id)} 
          onImportant={() => onToggleImportant(task.id)} 
          onComplited={() => onToggleComplited(task.id)} 
          key={task.id} {...task} />
        ) : null
    }
  </div>

const Task = ({text, important, complited, onComplited, onImportant, onRemove}) =>
  <div className={(complited) ? ((important) ? 'task-item complited important' : 'task-item complited') : ((important) ? 'task-item important' : 'task-item')}>
    <span className='toggleComplited' onClick={onComplited}></span>
    <span className='text'>{text}</span>
    <span className='toggleImportant' onClick={onImportant}></span>
    <span className='remove'  onClick={onRemove}></span>
  </div>
