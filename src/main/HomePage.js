import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {CALLBACK_URL, CLIENT_ID, SCOPES} from "../auth/constants";
import {LogInContext} from "../App";
import Header from "../components/Header";
import MusicCardContainer from "../components/MusicCardContainer";

const HomePage = () => {
	const isLoggedIn = useContext(LogInContext);

	if (isLoggedIn) {
		return <HomePageView/>;
	} else {
		const scopes = SCOPES.join(" ");

		window.location.replace(
			"https://accounts.spotify.com/authorize" +
			"?response_type=code" +
			"&client_id=" +
			CLIENT_ID +
			(scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
			"&redirect_uri=" +
			encodeURIComponent(CALLBACK_URL)
		);
		return null;
	}
};

const HomePageView = () => {
	const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);
	const [username, setUsername] = useState("fam");
	const [playlist, setPlaylist] = useState([]);

	const fetchRecentlyPlayed = () => {
		axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=10")
			.then((res) => {
				if (res.data.items) setRecentlyPlayedTracks(res.data.items);
			})
			.catch((error) => {
				throw "Spotify returned an error: " + error;
			});
	};

	const fetchUserData = () => {
		axios.get("https://api.spotify.com/v1/me")
			.then((response) => {
				setUsername(response.data.display_name);
			})
			.catch((error) => {
				throw "Spotify returned an error: " + error;
			});
	};

	const fetchUserPlaylist = () => {
		axios
			.get("https://api.spotify.com/v1/me/tracks?limit=10")
			.then((response) => {
				setPlaylist(response.data.items);
			})
			.catch((error) => {
				throw "Spotify returned an error: " + error;
			});
	};

	useEffect(() => {
		fetchUserData();
		fetchRecentlyPlayed();
		fetchUserPlaylist();
	}, []);

	const parseSongs = (myPlaylists) => {
		return myPlaylists.map((song) => {
			return {
				name: song.track.name,
				image: song.track.album.images[0].url,
				link: song.track.uri,
			};
		});
	};

	return (
		<>
			<Header username={username} />
			<div className="px-4">
				<MusicCardContainer items={parseSongs(recentlyPlayedTracks)} title="Recently played tracks" />
				<MusicCardContainer items={parseSongs(playlist)} title="My playlist" />
			</div>
		</>
	);
};

export default HomePage;
