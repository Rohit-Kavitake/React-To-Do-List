import React from "react";
import TodoItem from "./TodoItem";

function Todos({ todos, setTaskData }) {
	const findSelectedTodo = (id) => {
		return todos.findIndex(() => {
			return todos.forEach((todo) => {
				return todo.sno === id ? todo : null;
			});
		});
	};

	const deleteTask = (id) => {
		let data = findSelectedTodo(id);
		const tempTodolist = todos.slice();
		// console.log(selectedtodo);
		// console.log("removed")
		tempTodolist.splice(data, 1);
		// console.log("here")
		console.log(tempTodolist);
		setTaskData(tempTodolist);
	};
	return (
		<div className="container" id="rk">
			{todos
				? todos.map((todo) => <TodoItem task={todo} deleteTask={deleteTask} />)
				: "No Tasks"}
		</div>
	);
}

export default Todos;
