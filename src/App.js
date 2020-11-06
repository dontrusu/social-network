import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';

function App() {
  return (
	<Provider store={store}>
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login" component={LoginContainer} />
					<Route path="/" component={MainContainer} />
				</Switch>
			</div>
		</Router>
	</Provider>
  );
}

export default App;
