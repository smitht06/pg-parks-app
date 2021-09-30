import React from 'react';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login';


export default function Header() {
	return (
		<header>
			<Navbar bg='primary' variant='dark' collapseOnSelect>
				<Container>
					<Navbar.Brand>
						<Link to='/'>
							{' '}
							<Image src='../images/clicktohome.png' fluid />
						</Link>
					</Navbar.Brand>

					<Nav className='ml-auto'></Nav>

					<Nav className='ml-auto'>
						
						<Nav.Link>
							<i className='fas fa-shopping-cart'></i> Cart
						</Nav.Link>

						<Nav.Link>
							<i className='fas fa-user'></i> Login
						</Nav.Link>

						<NavItem>
							<form class='d-flex'>
								<input
									class='form-control me-sm-2'
									type='text'
									placeholder='Search'
								/>
								<button
									class='btn btn-secondary my-2 my-sm-0'
									type='submit'
								>
									Search
								</button>
							</form>
						</NavItem>
						<NavItem>
							<Login></Login>
						</NavItem>

					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}
