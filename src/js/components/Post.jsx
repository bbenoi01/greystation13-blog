import React from 'react';

const Post = () => {
	return (
		<div className='post'>
			<img
				src='/matrix alt.jpg'
				alt='Lost in the matrix'
				className='post-img'
			/>
			<div className='post-info'>
				<div className='post-categories'>
					<span className='post-category'>PlayStation</span>
					<span className='post-category'>Cool Stuff</span>
				</div>
				<span className='post-title'>Lorem ipsum dolor sit amet</span>
				<hr />
				<span className='post-date'>1 hour ago</span>
			</div>
			<p className='post-description'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
				nobis consequatur doloribus nulla commodi placeat aliquid eum, impedit
				nostrum quam sint sunt, ipsa distinctio necessitatibus totam, laboriosam
				esse nam a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Asperiores nobis consequatur doloribus nulla commodi placeat aliquid
				eum, impedit nostrum quam sint sunt, ipsa distinctio necessitatibus
				totam, laboriosam esse nam a. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Asperiores nobis consequatur doloribus nulla commodi
				placeat aliquid eum, impedit nostrum quam sint sunt, ipsa distinctio
				necessitatibus totam, laboriosam esse nam a. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Asperiores nobis consequatur doloribus
				nulla commodi placeat aliquid eum, impedit nostrum quam sint sunt, ipsa
				distinctio necessitatibus totam, laboriosam esse nam a.
			</p>
		</div>
	);
};

export default Post;
