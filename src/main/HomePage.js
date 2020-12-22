import React, { useEffect, useContext } from "react";
import axios from "axios";
import { CLIENT_ID, SCOPES, CALLBACK_URL } from '../auth/constants';
import {LogInContext} from "../App"

const HomePage = () => {
  const isLoggedIn = useContext(LogInContext)

  if (isLoggedIn) {
	return <HomePageView />
  }
  else{
	const scopes = SCOPES.join(" ");

	window.location.replace("https://accounts.spotify.com/authorize"+
	'?response_type=code' +
	'&client_id=' + CLIENT_ID +
	(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
	'&redirect_uri=' + encodeURIComponent(CALLBACK_URL));
	return null
  }
};

const HomePageView = () => {

	useEffect(() => {
		axios({
		  method: "GET",
		  url: "https://api.spotify.com/v1/me",
		})
		  .then((response) => console.log(response))
		  .catch((error) => {
			throw "Spotify returned an error: " + error;
		  });
	  }, []);

	  return(
		
		<h1 className="text-red-600">This is the HomePage</h1>
   	
	  )
};

export default HomePage;
