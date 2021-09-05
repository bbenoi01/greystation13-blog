import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<AppBar position='sticky'>
			<Toolbar className='nav'>
				<div className='nav-left'>
					<IconButton>
						<FontAwesomeIcon icon={['fab', 'xbox']} />
					</IconButton>
					<IconButton>
						<FontAwesomeIcon icon={['fab', 'playstation']} />
					</IconButton>
					<IconButton>
						<FontAwesomeIcon icon='gamepad' />
					</IconButton>
				</div>
				<div className='nav-center'>
					<ul className='nav-list'>
						<li className='nav-list-item'>Home</li>
						<li className='nav-list-item'>About</li>
						<li className='nav-list-item'>Contact</li>
						<li className='nav-list-item'>Write</li>
						<li className='nav-list-item'>Logout</li>
					</ul>
				</div>
				<div className='nav-right'>
					<IconButton>
						<FontAwesomeIcon icon='search' />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
