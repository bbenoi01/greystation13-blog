import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faGamepad,
	faSearch,
	faEdit,
	faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './js/components/Navbar';
import Home from './js/pages/Home';
import Single from './js/pages/Single';
import Write from './js/pages/Write';

library.add(fab, faGamepad, faSearch, faEdit, faTrashAlt);

const App = () => {
	return (
		<div>
			<Navbar />
			<Write />
		</div>
	);
};

export default App;
