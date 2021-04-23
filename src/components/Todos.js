import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
import "./Todos.scss";

function Todos({ todos, setTaskData }) {
	const [Title, setTitle] = useState("");
	const [Desc, setDesc] = useState("");

	const tempTodo = todos.slice();

	const findSelectedTodo = (id) => {
		return todos.findIndex((todo) => {
			return todo.sno === id ? todo : null;
		});
	};

	const updateTask = (task) => {
		let index = todos.findIndex((todo) => todo === task);
		setTitle(todos[index].title);
		setDesc(todos[index].desc);
		window.$("#myModal").modal("show");
	};

	const saveUpdated = (e) => {
		e.preventDefault();
		let index = todos.findIndex((todo) => todo.title === Title);
		tempTodo[index].title = Title;
		tempTodo[index].desc = Desc;
		setTaskData(tempTodo);
		setTimeout(() => {
			document.querySelector("#closeDialog").click();
		}, 1000);
	};

	const deleteTask = (id) => {
		let data = findSelectedTodo(id);
		const tempTodolist = todos.slice();
		tempTodolist.splice(data, 1);
		setTaskData(tempTodolist);
	};
	return (
		<>
			<div className="container" id="rk">
				{todos
					? todos.map((todo) => (
							<TodoItem
								task={todo}
								key={todo.sno}
								deleteTask={deleteTask}
								updateTask={updateTask}
								setdata={setTaskData}
							/>
					  ))
					: "No Tasks"}
			</div>
			<div class="modal" id="myModal">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h3 class="modal-title">
								<i class="fas fa-cloud"></i>Edit Task
							</h3>
							<button
								type="button"
								id="closbetn"
								class="close"
								data-dismiss="modal"
							>
								&times;
							</button>
						</div>
						<div class="modal-body">
							<form onSubmit={saveUpdated}>
								<div className="input-field">
									<input
										type="text"
										id="title"
										// size="50"
										value={Title}
										onChange={(e) => setTitle(e.target.value)}
										required
									/>
									<label htmlFor="name">I Want To...</label>
								</div>
								<div className="input-field">
									<input
										type="text"
										id="desc"
										size="40"
										value={Desc}
										onChange={(e) => setDesc(e.target.value)}
										required
									/>
									<label htmlFor="name11">Description</label>
								</div>
								<button id="save" type="submit" className="btn btn-primary">
									Save changes
								</button>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" data-dismiss="modal" class="btn btn-danger">
								close
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
}

export default Todos;
