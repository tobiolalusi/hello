import React, {useEffect} from "react";
import axios from 'axios';
import queryString from 'querystring';
import { Redirect } from "react-router-dom";
import {parseQuery} from "../util";
import {CALLBACK_URL, CLIENT_ID, CLIENT_SECRET, LOCAL_STORAGE_SPOTIFY_AUTH} from "./constants";

const Callback = (props) => {
    const queryParams = queryString.parse(props.location.search.substring(1));
    const code = queryParams['code'];
    const state = queryParams['state'];
    const error = queryParams['error'];

    if (error !== undefined) {
        throw "Spotify returned an error: " + error;
    }

    useEffect(() => {
        axios({
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            data: queryString.stringify({
                grant_type: "authorization_code",
                code: code,
                redirect_uri: CALLBACK_URL
            }),
            headers: {
            	"Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
            }
        })
            .then((response) => localStorage.setItem(LOCAL_STORAGE_SPOTIFY_AUTH, JSON.stringify(response.data)))
            .catch((error) => {
                throw "Spotify returned an error: " + error;
            })
    }, []);

    return <Redirect to="/home" />;
};

export default Callback;
