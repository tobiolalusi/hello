import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Callback } from "./auth";
import { HomePage } from "./main";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login/callback" component={Callback} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
