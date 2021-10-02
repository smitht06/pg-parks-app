import React from 'react';
import sites from '../sites';
import { Image, Row,Col } from 'react-bootstrap';
import Login from '../components/Login'
import RentalScreen from './RentalScreen';

const SiteScreen = ({ match }) => {
	const site = sites.find((p) => p.name === match.params.name);

	return (
		<>
		
			<Row className='justify-content-md-center'>
				<Col md={6}>
					<h1>{site.name}</h1>
					<Image src={site.image} alt={site.name} fluid />
					<h4>{site.description}</h4>
					
				</Col>
			</Row>
			
			
		</>
	);
};

export default SiteScreen;
