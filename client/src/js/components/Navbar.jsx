import '../../css/navbar.css';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { user, dispatch } = useContext(Context);

	const handleLogout = async () => {
		dispatch({ type: 'LOGOUT' });
		await sessionStorage.removeItem('token');
	};

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
						<li className='nav-list-item'>
							<Link to='/' className='link'>
								HOME
							</Link>
						</li>
						<li className='nav-list-item'>
							<Link to='/' className='link'>
								ABOUT
							</Link>
						</li>
						<li className='nav-list-item'>
							<Link to='/' className='link'>
								CONTACT
							</Link>
						</li>
						<li className='nav-list-item'>
							<Link to='/write' className='link'>
								WRITE
							</Link>
						</li>
						<li className='nav-list-item' onClick={handleLogout}>
							{user && 'LOGOUT'}
						</li>
					</ul>
				</div>
				<div className='nav-right'>
					{user ? (
						<Link to='/settings'>
							<img src={user.profilePic} alt='' className='nav-img' />
						</Link>
					) : (
						<ul className='nav-list'>
							<li className='nav-list-item'>
								<Link to='/login' className='link'>
									LOGIN
								</Link>
							</li>
							<li className='nav-list-item'>
								<Link to='/register' className='link'>
									REGISTER
								</Link>
							</li>
						</ul>
					)}
					<FontAwesomeIcon icon='search' className='nav-searh-icon' />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
