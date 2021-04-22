import React from "react";
import "./header.scss";


const Header = (props) => {
	return (
		<nav className="navbar navbar-expand-md bg-primary navbar-dark">
			{/* <!-- Brand --> */}
			<a className="navbar-brand " href="#">
				<h2>{props.title}</h2>
			</a>

			{/* <!-- Toggler/collapsibe Button --> */}
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#collapsibleNavbar"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			{/* <!-- Navbar links --> */}
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link " href="mailto:kavitakerohit2001@gmail.com">
							Rohit Kavitake
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
