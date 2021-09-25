import React from 'react';
import './bootstrap.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import SiteTypeScreen from './screens/SiteTypeScreen';

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/sitetype/:id' component={SiteTypeScreen}/>
				</Container>
				
			</main>
			<footer />
		</Router>
	);
}

export default App;
