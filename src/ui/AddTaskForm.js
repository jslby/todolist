import React from 'react';

export default ({onNewTask = f => f}) => {
	let _text;

	const submit = e => {
		e.preventDefault();
		console.log('Send text');
		onNewTask(_text.value);
		_text.value = '';
		_text.focus();
	}
	const handleKey = e => {
		if(e.key === 'Enter') submit(e)
	}
	return(
		<div className='add-form'>
			<h1>#todome</h1>
			<input autoFocus ref={i => _text = i} onKeyPress={handleKey} type='text' placeholder='just type task...'/>
		</div>
	)
}
