import React from "react";

import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import CardList from "./CardList.js";
import Footer from "./Footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />

			<Jumbotron />

			<CardList />

			<Footer /> 
		</div>
	);
}
