import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import Details from '../components/Details';
import Cart from '../components/Cart';
import Default from '../components/Default';
import Propaganda from '../components/Propaganda';

const AppRouter = () => (
	<BrowserRouter>
		<React.Fragment>
			<NavBar />
			<Propaganda></Propaganda>
			<Switch>
				<Route path="/" component={ProductList} exact={true} />
				<Route path="/details" component={Details} exact={true} />
				<Route path="/cart" component={Cart} exact={true} />
				<Route component={Default} exact={true} />
			</Switch>
		</React.Fragment>
	</BrowserRouter>
);

export default AppRouter;
