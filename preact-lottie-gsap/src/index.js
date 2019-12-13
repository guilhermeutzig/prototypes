import { Component } from 'preact';
import './style'

import Background from './components/background';
import Buildings from './components/buildings';
import Motorcycle from './components/motorcycle';
import Ground from './components/ground';

export default class App extends Component {

	render() {
		return (
			<div id="app">
        <Background />
        <Buildings />
        <Motorcycle />
        <Ground />
			</div>
		);
	}
}
