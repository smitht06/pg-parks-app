import React, { useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listSiteTypeDetails } from '../actions/siteTypeActions';
import { listSitesFiltered } from '../actions/siteTypeActions';
import Site from '../components/Site'
import SiteType from '../components/SiteType';


const SiteTypeScreen = ({ match }) => {
	const dispatch = useDispatch();

	const siteTypeDetails = useSelector((state) => state.siteTypeDetails);
	const { loading, error, siteType } = siteTypeDetails;

	const sitesFilteredList = useSelector((state) => state.sitesFilteredList)
	const {sitesFiltered} = sitesFilteredList
    
	useEffect(() => {
		dispatch(listSiteTypeDetails(match.params.id));
	}, [dispatch, match]);

	useEffect(() => {
		dispatch(listSitesFiltered(match.params.id));
	}, [dispatch, match]);

	
	return (
		<>
			
			{loading ? (
        		
				<Loader/>
      		) : error ? (
        		<Message variant='danger'>{error}</Message>
      		) : (
		<>
		<Row className="justify-content-md-center">
			<Col xs={12} sm={4} md={6}>
		<h1>{siteType.name}</h1>
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
      )}
		</>
	);
	
	
	
	
};

export default SiteTypeScreen;
