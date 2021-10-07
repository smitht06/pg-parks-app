import React from 'react';

import sitetypes from '../sitetypes';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import sites from '../sites';
import Site from '../components/Site';

const SiteTypeScreen = ({ match }) => {
	const sitetype = sitetypes.find((p) => p.name === match.params.name);
	const sitesFiltered = sites.filter((p) => p.type === match.params.name);

	return (
		<>
			<Row className='justify-content-md-center'>
				<Col md={6}>
					<h1>{sitetype.name}</h1>
					<Image src={sitetype.image} alt={sitetype.name} fluid />
					<h4>{sitetype.description}</h4>
				</Col>
			</Row>

			<Row>
				{sitesFiltered.map((site) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Site site={site} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default SiteTypeScreen;
