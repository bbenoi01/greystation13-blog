import '../../css/home.css';
import blogApi from '../../api/blog_api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await blogApi.get('/posts' + search);
			setPosts(res.data);
		};
		fetchPosts();
	}, [search]);

	console.log('posts', posts);
	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
