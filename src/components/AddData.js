import React, { useState } from "react";
import "./AddData.scss";

const AddData = ({ data, setTaskData }) => {
	const [Search, setSearch] = useState("");
	const [Desc, setDesc] = useState("");

	const temp = data.slice();

	const AddTask = (e) => {
		e.preventDefault();
		temp.unshift({
			sno: data.length + 1,
			title: Search,
			desc: Desc,
		});
		setTaskData(temp);
		setSearch("");
		setDesc("");
	};
	return (
		<div className="container">
			<form id="dataform" onSubmit={AddTask}>
				<div className="input-group mb-3">
					<div className="input-field">
						<input
							type="text"
							id="name"
							value={Search}
							onChange={(e) => setSearch(e.target.value)}
							required
						/>
						<label htmlFor="name">I Want To...</label>
					</div>
					<div className="input-field">
						<input
							type="text"
							id="name11"
							value={Desc}
							onChange={(e) => setDesc(e.target.value)}
							required
						/>
						<label htmlFor="name11">Description</label>
					</div>
					<div>
						<button className="btn  btn-success" type="submit">
							Done
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddData;
