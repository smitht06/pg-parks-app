import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Login from '../components/Login';
import SiteType from '../components/SiteType';
import sitetypes from '../sitetypes';
import React, { useState, useEffect } from 'react';

function HomeScreen() {
	const [sitetypes, setSitetypes] = useState([]);

	useEffect(() => {
		const fetchSitetypes = async () => {
			const { data } = await axios.get('/api/sitetypes');
			setSitetypes(data);
		};
		fetchSitetypes();
	}, []);

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
