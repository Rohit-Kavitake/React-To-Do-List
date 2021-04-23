import React from "react";

function TodoItem({ task, deleteTask, updateTask, setTaskData }) {
	// console.log(task.sno)
	return (
		<div >
			<div className="row m-4">
				<div className="col-md-8 col-sm-8 col-xs-8 text-center">
					<h2 style={{ wordWrap: "break-word" }}>{task.title}</h2>
					<p className=" py-4 " style={{ wordWrap: "break-word" }}>
						{task.desc}
					</p>
				</div>
				<div className="col-md-4 col-sm-4 col-xs-4 text-center">
					<button
						className="btn m-1  btn-danger"
						onClick={() => {
							deleteTask(task.sno);
						}}
					>
						Delete
					</button>
					<button
						className="btn m-1 btn-primary"
						onClick={() => {
							updateTask(task);
						}}
					>
						update
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;
