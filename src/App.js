import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import DialogsContainer from "./containers/DialogsContainer"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
	<Provider store={store}>
		<Router>
			<div className="App">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Switch>
						<Route path="/profile" component={Profile} />
						<Route path="/dialogs" component={DialogsContainer} />
						<Route path="/news" component={News} />
						<Route path="/music" component={Music} />
						<Route path="/settings" component={Settings} />
					</Switch>
				</div>
			</div>
		</Router>
	</Provider>
  );
}

export default App;
