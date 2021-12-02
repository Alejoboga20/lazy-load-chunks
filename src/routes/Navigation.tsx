import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';
import logo from '../logo.svg';

export const Navigation = () => {
	return (
		<Router>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						{routes.map((route) => (
							<li>
								<NavLink to={route.path} activeClassName='nav-active' exact>
									{route.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					{routes.map((route) => (
						<Route path={route.path}>{route.Component}</Route>
					))}
				</Switch>
			</div>
		</Router>
	);
};
