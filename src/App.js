import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Callback} from "./auth";
import {HomePage} from "./main";
import {axiosRequestInterceptor} from "./auth/helper";
import { LOCAL_STORAGE_SPOTIFY_AUTH } from './auth/constants';

export const LogInContext = React.createContext(false)

const App = () => {
	
	const isLoggedIn = () =>{
		const spotifyAuthString = localStorage.getItem(LOCAL_STORAGE_SPOTIFY_AUTH);
		const auth =  JSON.parse(spotifyAuthString)
		
		if (auth && auth.access_token) return true
		else return false
	}

	axiosRequestInterceptor();

	return (
		<LogInContext.Provider value={isLoggedIn()}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route path="/login/callback" component={Callback}/>
			</Switch>
		</BrowserRouter>
		</LogInContext.Provider>
	);
};

export default App;
