import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import SiteType from '../components/SiteType';
import sitetypes from '../sitetypes';

function HomeScreen() {
	return (
		<>
        <Image src='../images/mansion.png' fluid />
			<Row>
				{sitetypes.map((sitetype) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<SiteType sitetype={sitetype} />
					</Col>
				))}
			</Row>
		</>
	);
}

export default HomeScreen;
