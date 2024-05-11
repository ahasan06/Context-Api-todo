// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import TodoProvider from './contexts/Todo.jsx'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<TodoProvider>
		<App />
	</TodoProvider>,
);
