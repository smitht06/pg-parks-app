import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
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

	const siteTypeDetails = useSelector((state) => state.siteTypeDetails)
    const { loading, error, sitetype } = siteTypeDetails

	const [sitesFiltered, setSitesFiltered] = useState([]);

	useEffect(() => {
		dispatch(siteTypeDetails(match.params.id))
	},[dispatch,match])

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
			<Row className='justify-content-md-center'>
				<Col md={6}>
					<SiteType sitetype={sitetype} />
				</Col>
			</Row>
			{
				<Row>
					{sitesFiltered.map((site) => (
						<Col sm={12} md={6} lg={4} xl={3}>
							<Site site={site} />
						</Col>
					))}
				</Row>
			}
		</>
	);
};

export default SiteTypeScreen;
