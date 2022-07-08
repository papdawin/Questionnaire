import React from "react";
import icon from "../Files/icon.png";
import { Container, Navbar } from "react-bootstrap";
import HeaderPicker from "./Navigation/HeaderPicker";

export default function Navigation() {
	let user ;
	return (
		<Navbar
			sticky="top"
			variant="light"
			expand="md"
			style={{
				background: "#FDFAEE",
				borderBottom: "1px solid lightgray",
				boxShadow: "1px 1px 10px gray",
			}}
		>
			<Container>
				<Navbar.Brand>
					<img src={icon} height="50px" /> Questionnaire
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<HeaderPicker user={user} />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
