import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SiteType = ({ sitetype }) => {
	return (
			<Card className='my-3 p-3 rounded'>
				<Link to={`/${sitetype.name}`}>
					<Card.Img src={sitetype.image} variant='top' />
				</Link>
				<Card.Body>
					<strong>{sitetype.name}</strong>
				</Card.Body>
			</Card>
	);
};

export default SiteType;
