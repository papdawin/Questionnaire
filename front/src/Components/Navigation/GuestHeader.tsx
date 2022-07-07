import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';

export default function GuestHeader() {
  return (
    <Nav>
			<Nav.Link>Main Page</Nav.Link>
			<Nav.Link>Quizzes</Nav.Link>
			<NavDropdown title="Authentication">
				<NavDropdown.Item>Sign In</NavDropdown.Item>
				<NavDropdown.Item>Sign Up</NavDropdown.Item>
			</NavDropdown>
		</Nav>
  )
}
