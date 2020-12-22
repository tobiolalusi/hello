import axios from 'axios';
import {LOCAL_STORAGE_SPOTIFY_AUTH} from "./constants";

const getLocalStorageSpotifyAuth = () => {
	return localStorage.getItem(LOCAL_STORAGE_SPOTIFY_AUTH);
}

export const axiosRequestInterceptor = () => {
	axios.interceptors.request.use(
		(config) => {
			if (!config.headers["Authorization"]) config.headers["Authorization"] = "Bearer " + getLocalStorageSpotifyAuth();
			if (!config.headers["Content-Type"]) config.headers["Content-Type"] = "application/json";
			if (!config.headers["Accept"]) config.headers["Accept"] = "application/json";
			return config;
		},
		(error) => Promise.reject(error)
	);
}
