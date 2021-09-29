import '../../css/singlePost.css';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blogApi from '../../api/blog_api';

const SinglePost = () => {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const [post, setPost] = useState({});
	const { user } = useContext(Context);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [updateMode, setUpdateMode] = useState(false);

	useEffect(() => {
		const getPost = async () => {
			const res = await blogApi.get('/post/' + path);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await blogApi.delete(`post/${post._id}`);
			window.location.replace('/');
		} catch (err) {}
	};
	console.log(post);

	const handleUpdate = async () => {
		try {
			await blogApi.put(`/post/${post._id}`, {
				username: user.username,
				title,
				desc,
			});
			setUpdateMode(false);
		} catch (err) {}
	};

	return (
		<div className='single-post'>
			<div className='single-post-wrapper'>
				{post.photo && (
					<img src={post.photo} alt='' className='single-post-img' />
				)}
				{updateMode ? (
					<input
						type='text'
						className='single-post-title-input'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<h1 className='single-post-title'>
						{title}
						{post.username === user?.username && (
							<div className='single-post-edit'>
								<IconButton onClick={() => setUpdateMode(true)}>
									<FontAwesomeIcon
										icon='edit'
										className='single-post-icon edit'
									/>
								</IconButton>
								<IconButton onClick={handleDelete}>
									<FontAwesomeIcon
										icon='trash-alt'
										className='single-post-icon trash'
									/>
								</IconButton>
							</div>
						)}
					</h1>
				)}
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
				{updateMode ? (
					<textarea
						autoFocus
						cols='30'
						rows='10'
						className='single-post-desc-input'
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<p className='single-post-desc'>{desc}</p>
				)}
				{updateMode && (
					<button className='single-post-btn' onClick={handleUpdate}>
						Update
					</button>
				)}
			</div>
		</div>
	);
};

export default SinglePost;
