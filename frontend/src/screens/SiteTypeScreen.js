import React from 'react';
import { Link } from 'react-router-dom';
import SiteType from '../components/SiteType';
import sitetypes from '../sitetypes';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function SiteTypeScreen(match) {

	const sitetype = sitetypes.find((p) => p._id === match.params._id)

	return <>
		<Link classname='btn btn-light my-3' to='/'>
		Go back
		</Link>
		<Row>
			<Col md={6}>
				<Image src={sitetype.image} alt={sitetype.name} fluid/>
			</Col>
		</Row>
	</>;
}

export default SiteTypeScreen;
