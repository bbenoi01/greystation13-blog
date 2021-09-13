import '../../css/singlePost.css';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blogApi from '../../axios/blog_api';

const SinglePost = () => {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const [post, setPost] = useState({});
	const PF = blogApi;
	// const { user } = useContext(Context);
	// const [title, setTitle] = useState("");
	// const [desc, setDesc] = useState("");
	// const [updateMode, setUpdateMode] = useState(false);

	useEffect(() => {
		const fetchPost = async () => {
			const res = await blogApi.get('/post/' + path);
			setPost(res.data);
			// setTitle(res.data.title);
			// setDesc(res.data.desc);
		};
		fetchPost();
	}, [path]);

	return (
		<div className='single-post'>
			<div className='single-post-wrapper'>
				{post.photo && (
					<img src={PF + post.photo} alt='' className='single-post-img' />
				)}
				<h1 className='single-post-title'>
					{post.title}
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
						Author:{' '}
						<Link to={`/?user=${post.username}`} className='link'>
							<b>{post.username}</b>
						</Link>
					</span>
					<span className='single-post-date'>
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className='single-post-description'>{post.description}</p>
			</div>
		</div>
	);
};

export default SinglePost;
