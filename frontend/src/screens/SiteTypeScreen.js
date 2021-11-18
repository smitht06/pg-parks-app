import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import sites from '../sites';
import Site from '../components/Site';
import axios from 'axios';
import SiteType from '../components/SiteType';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listSiteTypeDetails } from '../actions/siteTypeActions';

const SiteTypeScreen = ({ match }) => {
	const dispatch = useDispatch();

	const siteTypeDetails = useSelector((state) => state.siteTypeDetails);
	const { loading, error, siteType } = siteTypeDetails;

	const [sitesFiltered, setSitesFiltered] = useState([]);

	useEffect(() => {
		dispatch(listSiteTypeDetails(match.params.id));
	}, [dispatch, match]);

	useEffect(() => {
		const fetchSites = async () => {
			const { data } = await axios.get(
				`/api/sitetypes/${match.params.id}/sites`
			);
			setSitesFiltered(data);
		};
		fetchSites();
	}, []);

	return (
		<>
			{loading ? (
        		
				<Loader/>
      		) : error ? (
        		<Message variant='danger'>{error}</Message>
      		) : (
        <Row>
          
              <Image src={siteType.image}/>
            </Row>
			  )}
		</>
	);
};

export default SiteTypeScreen;
