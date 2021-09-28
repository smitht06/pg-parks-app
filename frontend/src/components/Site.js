import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Site = ({ site, type }) => {
	return (
		<Card className='my-3 p-3 rounded' style={{height:'20rem'}}>
			<Link to={`site/${site.name}`}>
				<Card.Img src={site.image} variant='top' />
			</Link>
			<Card.Body>
				<strong>{site.name}</strong>
				<p>{site.description}</p>
				<p>{site.type}</p>
			</Card.Body>
		</Card>
	);
};

export default Site;
