import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Login} from "./auth";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={Login} />
              <Route exact={true} path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
