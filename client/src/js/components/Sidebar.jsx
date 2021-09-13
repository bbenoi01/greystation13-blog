import '../../css/sidebar.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const res = await axios.get('/categories');
			setCategories(res.data);
		};
		getCategories();
	});
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
					{categories.map((category) => (
						<Link to={`/?category=${category.name}`} className='link'>
							<li className='sidebar-list-item'>{category.name}</li>
						</Link>
					))}
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
