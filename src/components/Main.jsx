import React from "react"
import '../App.css';
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import DialogsContainer from "../containers/DialogsContainer"
import UsersContainer from "../containers/UsersContainer"
import ProfileContainer from "../containers/ProfileContainer"
import News from "./News/News"
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import { Switch, Route } from "react-router-dom";


const Main = (props) => {
	return(
		<div className="app-wrapper">
			<Header auth={props.auth} />
			<Navbar />
			<div className="app-wrapper-content">
				<Switch>
					<Route path="/profile/:userId?" component={ProfileContainer} />
					<Route path="/dialogs" component={DialogsContainer} />
					<Route path="/users" component={UsersContainer} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</Switch>
			</div>
		</div>
	)
}

export default Main