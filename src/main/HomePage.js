<<<<<<< HEAD
import React, {useEffect} from 'react'
import axios from 'axios';
import Header from '../components/Header'
=======
import React, {useContext, useEffect} from "react";
import axios from "axios";
import {CALLBACK_URL, CLIENT_ID, SCOPES} from '../auth/constants';
import {LogInContext} from "../App"

>>>>>>> 3d47567dc2020875d14b40808919ab0620615489
const HomePage = () => {
	const isLoggedIn = useContext(LogInContext)

	if (isLoggedIn) {
		return <HomePageView/>
	} else {
		const scopes = SCOPES.join(" ");

<<<<<<< HEAD
    return (
        <div>
            This is the HomePage 
                 <Header/>
        </div>
    )
}
=======
		window.location.replace("https://accounts.spotify.com/authorize" +
			'?response_type=code' +
			'&client_id=' + CLIENT_ID +
			(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
			'&redirect_uri=' + encodeURIComponent(CALLBACK_URL));
		return null
	}
};
>>>>>>> 3d47567dc2020875d14b40808919ab0620615489

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

	return (
		<h1 className="text-red-600">This is the HomePage</h1>
	)
};

export default HomePage;
