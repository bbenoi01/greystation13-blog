import React from 'react';
import { render } from 'react-dom';
import { ContextProvider } from './context/Context';
import App from './App';

render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
