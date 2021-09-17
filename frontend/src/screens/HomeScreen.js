import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import SiteType from '../components/SiteType';

function HomeScreen() {
	return (
        <>
			<Image src='../images/mansion.png' fluid/>
            <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
            <SiteType/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <SiteType/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <SiteType/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <SiteType/>
            </Col>
           
            </Row>
            <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
            <SiteType/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <SiteType/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <SiteType/>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
            <SiteType/>
            </Col>
            </Row>
        </>
	);
}

export default HomeScreen;
