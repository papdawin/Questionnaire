import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const UserHeader = (props: any) => {
	return (
		<Nav>
			<Nav.Link>Main Page</Nav.Link>
			<NavDropdown title="Quizzes">
				<NavDropdown.Item>Play</NavDropdown.Item>
				<NavDropdown.Item>Upload</NavDropdown.Item>
			</NavDropdown>
			{props.user === "admin" ? (
				<NavDropdown title="Moderation">
					<NavDropdown.Item>Quiz management</NavDropdown.Item>
					<NavDropdown.Item>User management</NavDropdown.Item>
				</NavDropdown>
			) : <span /> }

			<Nav.Link>Profile</Nav.Link>
		</Nav>
	);
};

export default UserHeader;
