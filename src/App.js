import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Callback} from "./auth";
import {HomePage} from "./main";
import {axiosRequestInterceptor} from "./auth/helper";

const App = () => {

	axiosRequestInterceptor();

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route path="/login/callback" component={Callback}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
