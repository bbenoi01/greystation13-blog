import React from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-item'>
				<div className='sidebar-title'>About Me</div>
				<img
					className='sidebar-img'
					src='https://lh3.googleusercontent.com/Er0cehjLnF7wbrL6fAR8Qbqq68tWwLJUEbzmC434HevQONXBjfP4nyn9cYysBwDS9ZikvhZOofQjjjIEemOU0SJVZX3mj1lnFl0RgQB7wbk5JFR6Fg9RoxbmR7VQZ4OZzdZYiYFr1JnTJSN-vGO0XRf4XYKtAy9ldy5N0hrrqmXzDKAOGaTAedzvGsUUxoVVBTVM9o5ltbdEWi52ruumqjR-7dakg8vF_JStACHWCZ6V9XCHzU8lBmqZ41VLOKAoS2kP5iGxRMtzp4pPIVQfKfq7OuTg5CBBaXJ7SdwGZDz8BqUhyFnqk0AL04-CM3Gcpz4r56zDmZml26RDT86WEScs6xSkOISZMzjCQD3m3x-KqL6b3XfFBPDuyj70QmTFzed1HzGLGR1av1HY9bmr7MKXoZloQkR4TSgoq-rhN6sOYZw2VJnEtizvt34dv-NgixHBXIHxsz-mqiUxUbc5i1DiBQ7OvejwZn7f2i8CyffmRqyQu9slwQlW0qzwwZ9FHyNMGQE5qVi0z07p2x45KuCpsftfkGSOUIh4IXe9kkjFbhcX7-b6ljsjZmlzZ6R6JTdTYbEO5P02aaj7paC3nssPrYFH6-wvqsG81vXnv5SI6ETD61bakgmjtFKyTuY8faL-gC87K3amQKPCoi7An0eCf8r-O08lZHYAFHU3G3qjNElaWxe4A3qtd8i7P07S4lJ8orGXENBWvBNRCTdL8Bo=w2500-h1874-no?authuser=0'
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
