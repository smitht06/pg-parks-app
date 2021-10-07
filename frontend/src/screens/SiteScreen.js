import React from 'react';

import { Image, Row,Col } from 'react-bootstrap';

import rentals from '../rentals';
import Rental from '../components/Rental';

const SiteScreen = ({ match }) => {
	
	const rentalFiltered = rentals.filter((p) => p.site === match.params.name); 
	const [site, setSite] = useState([]);

	useEffect(() => {
		const fetchSite = async () => {
			const { data } = await axios.get('/api/sites');
			setSite(data);
		};
		fetchSite();
	}, []);


	return (
		<>
		
			<Row className='justify-content-md-center'>
				<Col md={6}>
					<h1>{site.name}</h1>
					<Image src={site.image} alt={site.name} fluid />
					<h4>{site.description}</h4>
					
				</Col>
			</Row>

			<table class="table table-hover">
				<thead>
					<tr>
					<th scope="col">Type</th>
					<th scope="col">Column heading</th>
					<th scope="col">Column heading</th>
					<th scope="col">Column heading</th>
					</tr>
				</thead>

			{rentalFiltered.map((rental) => 
			<Rental rental = {rental}/>
			)}

			</table>
			
		</>
	);
};

export default SiteScreen;
