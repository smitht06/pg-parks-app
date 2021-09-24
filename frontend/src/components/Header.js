import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Image } from 'react-bootstrap';
export default function Header() {
	return (
		<header>
			<Navbar bg='primary' variant='dark' collapseOnSelect>
				<Container>
					<Navbar.Brand> <Image src='../images/clicktohome.png' fluid/></Navbar.Brand>

					<Nav className='ml-auto'>
						<Nav.Link>
							<i className='fas fa-shopping-cart'></i> Cart
						</Nav.Link>

						<Nav.Link>
							<i className='fas fa-user'></i> Login
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}
