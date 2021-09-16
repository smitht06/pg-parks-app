import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
	return (
		<header>
			<Navbar bg='primary' variant='dark' collapseOnSelect>
				<Container>
					
						<Navbar.Brand>PG Parks and Recreation</Navbar.Brand>
					

					<Nav className='ml-auto'>
					
							<Nav.Link>
								<i className='fas fa-shopping-cart'></i> Cart
							</Nav.Link>
					
						
							<Nav.Link>
								<i className='fas fa-user'></i> Sign In
							</Nav.Link>
						
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}
