import React from 'react';
import sites from '../sites';
import { Image } from 'react-bootstrap';
import Login from '../components/Login'

const SiteScreen = ({ match }) => {
	const site = sites.find((p) => p.name === match.params.name);

	return (
		<>
			<h1>{site.name}</h1>
			<Image
				src={site.image}
				alt={site.name}
				style={{ height: '20rem' }}
				fluid
			/>
			<h4>{site.description}</h4>
            
		</>
	);
};

export default SiteScreen;
