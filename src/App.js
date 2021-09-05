import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from './js/components/Navbar';
import Home from './js/pages/Home';

library.add(fab, faGamepad, faSearch);

const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
		</div>
	);
};

export default App;
