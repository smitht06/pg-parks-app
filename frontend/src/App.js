import React from 'react';
import './bootstrap.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<Router>
		<Header/>
			<main>
				<Container>
					<Route path="/" component={HomeScreen} exact/>
				</Container>
			</main>
			<footer />
		</Router>
	);
}

export default App;
