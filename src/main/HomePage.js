import React, {useEffect} from 'react'
import axios from 'axios';

const HomePage = () => {

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://api.spotify.com/v1/me"
        })
            .then((response) => console.log(response))
            .catch((error) => {
                throw "Spotify returned an error: " + error;
            });
    }, []);

    return (
        <div>
        This is the HomePage 
        </div>
    )
}

export default HomePage
