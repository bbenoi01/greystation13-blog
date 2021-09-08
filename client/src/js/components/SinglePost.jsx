import '../../css/singlePost.css';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SinglePost = () => {
	return (
		<div className='single-post'>
			<div className='single-post-wrapper'>
				<img
					src='/matrix alt.jpg'
					alt='Lost in the matrix'
					className='single-post-img'
				/>
				<h1 className='single-post-title'>
					Lorem ipsum dolor sit amet.
					<div className='single-post-edit'>
						<IconButton>
							<FontAwesomeIcon icon='edit' className='single-post-icon edit' />
						</IconButton>
						<IconButton>
							<FontAwesomeIcon
								icon='trash-alt'
								className='single-post-icon trash'
							/>
						</IconButton>
					</div>
				</h1>
				<div className='single-post-info'>
					<span className='single-post-author'>
						Author: <b>GreyStation13</b>
					</span>
					<span className='single-post-date'>1 hour ago</span>
				</div>
				<p className='single-post-description'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil omnis
					deleniti nobis dicta, consequuntur optio fugit corrupti voluptates.
					Nesciunt voluptatem cum rerum exercitationem veniam dolor unde labore
					eos quae illum. Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Nihil omnis deleniti nobis dicta, consequuntur optio fugit
					corrupti voluptates. Nesciunt voluptatem cum rerum exercitationem
					veniam dolor unde labore eos quae illum. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Nihil omnis deleniti nobis dicta,
					consequuntur optio fugit corrupti voluptates. Nesciunt voluptatem cum
					rerum exercitationem veniam dolor unde labore eos quae illum. Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Nihil omnis
					deleniti nobis dicta, consequuntur optio fugit corrupti voluptates.
					Nesciunt voluptatem cum rerum exercitationem veniam dolor unde labore
					eos quae illum. Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Nihil omnis deleniti nobis dicta, consequuntur optio fugit
					corrupti voluptates. Nesciunt voluptatem cum rerum exercitationem
					veniam dolor unde labore eos quae illum.
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
