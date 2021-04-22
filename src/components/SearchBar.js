import React, { useState } from "react";
import "./Serachbar.scss";

const SearchBar = ({ data, setTaskData }) => {
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
			<form onSubmit={AddTask}>
				<div className="input-group mb-3">
					{/* <div  className="input-field">
						<input
							type="text"
							id="task"
							// className="form-control"
							// placeholder="I Want to ..."
							value={Search}
							onChange={(e) => setSearch(e.target.value)}
							required
						/>
						<label htmlFor="task">I Want To...</label>
					</div>
					<div className="input-field">
						<input
							type="text"
							id="desc"
							// className="form-control"
							// placeholder="Description"
							value={Desc}
							onChange={(e) => setDesc(e.target.value)}
							required
						/>
						<label id="forDesc" htmlFor="desc">
							Description
						</label>
					</div> */}
					<div class="input-field">
						<input
							type="text"
							id="name"
							value={Search}
							onChange={(e) => setSearch(e.target.value)}
							required
						/>
						<label for="name">I Want To...</label>
					</div>
					<div class="input-field">
						<input
							type="text"
							id="name11"
							value={Desc}
							onChange={(e) => setDesc(e.target.value)}
							required
						/>
						<label for="name11">Description</label>
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

export default SearchBar;
