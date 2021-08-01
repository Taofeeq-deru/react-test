import Button from "./components/Button/Button";
import Search from "./components/Search/Search";
import { Route, Switch, useHistory } from "react-router-dom";

const Layout = () => {
	const history = useHistory();
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello</h1>
				<button onClick={() => history.push("/search")}>Switch</button>
				<Button />
				<Switch>
					<Route exact path="/search" component={Search} />
				</Switch>
			</header>
		</div>
	);
};

export default Layout;
