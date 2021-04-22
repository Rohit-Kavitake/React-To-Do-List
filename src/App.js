// import { Button } from "reactstrap";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
	const [taskData, setTaskData] = useState([
		{
			sno: 1,
			title: "Go to Gym!!",
			desc: "Get that body Shredded",
		},
		{
			sno: 2,
			title: "Create React app",
			desc: "Make A Goood To Do list ",
		},
	]);

	return (
		<div className="App">
			<Header title="To Do List" />
			<SearchBar setTaskData={setTaskData} data={taskData} />
			<Todos todos={taskData} setTaskData={setTaskData} />
		</div>
	);
}

export default App;