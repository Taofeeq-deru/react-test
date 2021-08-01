import "./App.css";
// import Button from "./components/Button/Button";
// import Search from "./components/Search/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/:id" component={Layout} />
			</Switch>
		</Router>
	);
}

export default App;
