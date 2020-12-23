import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CALLBACK_URL, CLIENT_ID, SCOPES } from "../auth/constants";
import { LogInContext } from "../App";
import Header from "../components/Header";
import MusicCard from "../components/MusicCard";
import MusicCardContainer from "../components/MusicCardContainer";

const mockTitle = "Mock Title";
const mockItems = [
  {
    name: "No bi agege",
    image: `https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?ixid=MXwxMjA3fDB8MHxzZWF
		yY2h8M3x8c3BvbmdlYm9ifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`,
    link: "link",
  },
  {
    name: "No bi agege",
    image: `https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?ixid=MXwxMjA3fDB8MHxzZWF
		yY2h8M3x8c3BvbmdlYm9ifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`,
    link: "link",
  },
  {
    name: "No bi agege",
    image: `https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?ixid=MXwxMjA3fDB8MHxzZWF
		yY2h8M3x8c3BvbmdlYm9ifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`,
    link: "link",
  },
  {
    name: "No bi agege",
    image: `https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?ixid=MXwxMjA3fDB8MHxzZWF
	yY2h8M3x8c3BvbmdlYm9ifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`,
    link: "link",
  },
  {
    name: "No bi agege",
    image: `https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?ixid=MXwxMjA3fDB8MHxzZWF
		yY2h8M3x8c3BvbmdlYm9ifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`,
    link: "link",
  },
  {
    name: "No bi agege",
    image: `https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?ixid=MXwxMjA3fDB8MHxzZWF
		yY2h8M3x8c3BvbmdlYm9ifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`,
    link: "link",
  },
  {
    name: "No bi agege",
    image: `https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?ixid=MXwxMjA3fDB8MHxzZWF
		yY2h8M3x8c3BvbmdlYm9ifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`,
    link: "link",
  },
  {
    name: "No bi agege",
    image: `https://images.unsplash.com/photo-1558647913-d1c0e5d478fa?ixid=MXwxMjA3fDB8MHxzZWF
		yY2h8M3x8c3BvbmdlYm9ifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`,
    link: "link",
  },
];
const HomePage = () => {
  const isLoggedIn = useContext(LogInContext);

  if (isLoggedIn) {
    return <HomePageView />;
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
  const [trending, setTrending] = useState([]);
  const fetchRecentlyPlayed = () => {
    axios
      .get(`https://api.spotify.com/v1/me/player/recently-played?limit=10`)

      .then((res) => {
        if (res.data.items) {
          setRecentlyPlayedTracks(res.data.items);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUserData = () => {
    axios({
      method: "GET",
      url: "https://api.spotify.com/v1/me",
    })
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
        console.log(response);

        setPlaylist(response.data.items);
      })
      .catch((error) => {
        throw "error message: " + error;
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
    <div>
      <Header username={username} />
      <div className="px-4">
        <MusicCardContainer
          items={parseSongs(recentlyPlayedTracks)}
          title="Recently played tracks"
        />
        <MusicCardContainer items={parseSongs(playlist)} title="My playlist" />
        <MusicCardContainer items={mockItems} title={mockTitle} />
      </div>
    </div>
  );
};

export default HomePage;
