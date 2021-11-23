import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Login from '../components/Login';
import SiteType from '../components/SiteType';
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { listSiteTypes } from '../actions/siteTypeActions';
import Message from '../components/Message'
import Loader from '../components/Loader'

function HomeScreen() {
	const dispatch = useDispatch();
	const siteTypeList = useSelector((state) => state.siteTypeList)
    const { loading, error, siteTypes } = siteTypeList

	useEffect(() => {
		dispatch(listSiteTypes())
	}, [dispatch])

	return (
		<>
			{console.log(siteTypes)}
			<Image src='../images/mansion.png' fluid />
			{loading ? (
        		
				<Loader/>
      		) : error ? (
        		<Message variant='danger'>{error}</Message>
      		) : (
        <Row>
          {siteTypes.map((sitetype) => (
            <Col key={sitetype._id} sm={12} md={6} lg={4} xl={3}>
              <SiteType sitetype={sitetype} />
            </Col>
          ))}
        </Row>
      )}
		</>
	);
}

export default HomeScreen;
