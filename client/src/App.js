import { useContext } from 'react';
import { Context } from './context/Context';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faGamepad,
	faSearch,
	faEdit,
	faTrashAlt,
	faPlus,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './js/components/Navbar';
import Home from './js/pages/Home';
import Single from './js/pages/Single';
import Write from './js/pages/Write';
import Settings from './js/pages/Setttings';
import Login from './js/pages/Login';
import Register from './js/pages/Register';

library.add(fab, faGamepad, faSearch, faEdit, faTrashAlt, faPlus, faUserCircle);

const App = () => {
	const { user } = useContext(Context);

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/post/:postId'>
					<Single />
				</Route>
				<Route path='/write'>{user ? <Write /> : <Register />}</Route>
				<Route path='/settings'>{user ? <Settings /> : <Register />}</Route>
				<Route path='/login'>{user ? <Home /> : <Login />}</Route>
				<Route path='/register'>{user ? <Home /> : <Register />}</Route>
			</Switch>
		</Router>
	);
};

export default App;
