import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import sites from '../sites';
import Site from '../components/Site';
import axios from 'axios';
import SiteType from '../components/SiteType';

const SiteTypeScreen = ({ match }) => {
	
	const [sitetype, setSitetype] = useState([]);

	useEffect(() => {
		const fetchSiteTypes = async () => {
			const { data } = await axios.get(`/api/sitetypes/${match.params.id}`);
			setSitetype(data);
		};
		fetchSiteTypes();
	}, []);

	const [sitesFiltered, setSitesFiltered] = useState([]);

	useEffect(() => {
		const fetchSites = async () => {
			const { data } = await axios.get(`/api/sitetypes/${match.params.id}/sites`);
			setSitesFiltered(data);
		};
		fetchSites();
	}, []);

	return (
		
		<>
		{console.log(match.params.name)}
			<Row className='justify-content-md-center'>
				<Col md={6}>
					<SiteType sitetype = {sitetype}/>
				</Col>
			</Row>
			{console.log(match.params.id)}
			{<Row>
				{sitesFiltered.map((site) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Site site={site} />
					</Col>
				))}
			</Row>}
		</>
	);
};

export default SiteTypeScreen;
