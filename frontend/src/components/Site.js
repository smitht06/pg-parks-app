import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Site = ({ site, type }) => {
	return (
		<Card className='my-3 p-3 rounded' style={{height:'16rem'}}>
			<Link to={`/${site.name}/hi`}>
				<Card.Img src={site.image} variant='top' style={{height:'11rem'}}/>
			</Link>
			<Card.Body>
				<strong>{site.name}</strong>
			</Card.Body>
		</Card>
	);
};

export default Site;
