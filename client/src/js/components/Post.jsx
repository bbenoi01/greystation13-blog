import '../../css/post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	const PF = 'http://localhost:3000/images/';
	return (
		<div className='post'>
			{post.photo && <img src={PF + post.photo} alt='' className='post-img' />}
			<div className='post-info'>
				<div className='post-categories'>
					{post.categories.map((category) => (
						<span className='post-category'>{category.name}</span>
					))}
					<span className='post-category'>Cool Stuff</span>
				</div>
				<Link to={`/post/${post.id}`} className='link'>
					<span className='post-title'>{post.title}</span>
				</Link>
				<hr />
				<span className='post-date'>
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className='post-description'>{post.description}</p>
		</div>
	);
};

export default Post;
