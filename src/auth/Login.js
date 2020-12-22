import  {useEffect, useState} from 'react';
import { CLIENT_ID, CLIENT_SECRET, SCOPES, CALLBACK_URL } from './constants';

const Login = () => {

	const scopes = SCOPES.join(" ");

	const logintoApi = () => {
		fetch("https://accounts.spotify.com/authorize"+
		'?response_type=code' +
		'&client_id=' + CLIENT_ID +
		(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
		'&redirect_uri=' + encodeURIComponent(CALLBACK_URL))
		.then()
	};

	return (
		<button >
			Log in
		</button>
	)
}

export default Login;
