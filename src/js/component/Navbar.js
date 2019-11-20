import React from "react";

export default function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>

					<div
						className="collapse navbar-collapse d-flex justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-item nav-link" href="#">
								About
							</a>
							<a className="nav-item nav-link" href="#">
								Service
							</a>
							<a className="nav-item nav-link" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
