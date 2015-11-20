import React, {findDOMNode, Component, PropTypes} from 'react';


import { Provider } from 'react-redux'
import store from '../store'
import Todos from '../components/todos'

export default class App extends Component {
	render() {
		return (
			<div>
				<div>Containerrrr</div>
				<Provider store={store}>
					<Todos />
				</Provider>
			</div>
		);
	}
}
