import '../../css/sidebar.css';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-item'>
				<div className='sidebar-title'>About Me</div>
				<img
					className='sidebar-img'
					src='/dj_greystation.jpg'
					alt='DJ GreyStation'
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti et
					magnam iure vero, unde fugiat aut nobis fugit? In, corporis incidunt
					rerum est provident possimus cupiditate minus earum et dolore!
				</p>
			</div>
			<div className='sidebar-item'>
				<div className='sidebar-title'>CATEGORIES</div>
				<ul className='sidebar-list'>
					<li className='sidebar-list-item'>PlayStation</li>
					<li className='sidebar-list-item'>Xbox</li>
					<li className='sidebar-list-item'>Switch</li>
					<li className='sidebar-list-item'>Cool Stuff</li>
				</ul>
			</div>
			<div className='sidebar-item'>
				<div className='sidebar-title'>FOLLOW US</div>
				<div className='sidebar-social'>
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
			</div>
		</div>
	);
};

export default Sidebar;
