import { CLIENT_ID, SCOPES, CALLBACK_URL } from './constants';

const Login = () => {

	const scopes = SCOPES.join(" ");

	const login = () => {
		window.location.replace("https://accounts.spotify.com/authorize"+
		'?response_type=code' +
		'&client_id=' + CLIENT_ID +
		(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
		'&redirect_uri=' + encodeURIComponent(CALLBACK_URL));
	};

	return (
		<button onClick={login}>
			Log in
		</button>
	)
}

export default Login;
