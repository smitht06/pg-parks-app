import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SiteType = ({ sitetype }) => {
	return (
		<Card className='my-3 p-3 rounded' style={{height:'15rem'}}>
			<Link to={`sitetype/${sitetype.name}`}>
				<Card.Img src={sitetype.image} variant='top' style={{height:'10rem'}} />
			</Link>
			<Card.Body>
				<strong>{sitetype.name}</strong>
			</Card.Body>
		</Card>
	);
};

export default SiteType;
