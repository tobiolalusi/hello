import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Login, Callback} from "./auth";
import {HomePage} from "./main";
import {axiosRequestInterceptor} from "./auth/helper";

const App = () => {

	axiosRequestInterceptor();

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/home" component={HomePage}/>
				<Route path="/login/callback" component={Callback}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
