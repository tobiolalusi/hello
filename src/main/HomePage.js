import React, { useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { CLIENT_ID, SCOPES, CALLBACK_URL } from '../auth/constants';

const HomePage = () => {
  const isLoggedIn = false;

  if (isLoggedIn) {
	return <HomePageView />
  }
  else{
	const scopes = SCOPES.join(" ");
	
	return window.location.replace("https://accounts.spotify.com/authorize"+
	'?response_type=code' +
	'&client_id=' + CLIENT_ID +
	(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
	'&redirect_uri=' + encodeURIComponent(CALLBACK_URL));
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

	return <div>This is the HomePage</div>;

}

export default HomePage;
