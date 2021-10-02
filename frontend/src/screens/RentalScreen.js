import React from 'react';
import Rental from '../components/Rental';
import rentals from '../rentals';

function RentalScreen({ match }) {
	const rentalsFiltered = rentals.filter((p) => p.site === match.params.name);

	return (
		<div>
			{rentalsFiltered.map((rental) => (
				<Rental rental={rental} />
			))}
		</div>
	);
}

export default RentalScreen;
