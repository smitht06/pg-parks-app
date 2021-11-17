import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Login from '../components/Login';
import SiteType from '../components/SiteType';
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { listSiteTypes } from '../actions/siteTypeActions';


function HomeScreen() {
	const dispatch = useDispatch();
	const siteTypeList = useSelector((state) => state.siteTypeList)
    const { loading, error, siteTypes } = siteTypeList

	useEffect(() => {
		dispatch(listSiteTypes())
	  }, [dispatch])

	return (
		<>
			<Image src='../images/mansion.png' fluid />
			{loading ? (
        		<h2>Loading...</h2>
      		) : error ? (
        		<h3>{error}</h3>
      		) : (
        <Row>
          {siteTypes.map((siteType) => (
            <Col key={siteType._id} sm={12} md={6} lg={4} xl={3}>
              <SiteType siteType={siteType} />
            </Col>
          ))}
        </Row>
      )}
		</>
	);
}

export default HomeScreen;
