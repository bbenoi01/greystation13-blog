import '../../css/register.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import blogApi from '../../axios/blog_api';

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await blogApi.post('/signup', {
				username,
				email,
				password,
			});
			await sessionStorage.setItem('token', res.data.token);
			const { token, ...others } = res.data;
			dispatch({ type: 'LOGIN_SUCCESS', payload: others });
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE' });
		}
	};

	return (
		<div className='register'>
			<span className='register-title'>Register</span>
			<form className='register-form' onSubmit={handleSubmit}>
				<label htmlFor=''>Username</label>
				<input
					type='text'
					placeholder='Enter Username...'
					className='register-input'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor=''>Email</label>
				<input
					type='email'
					placeholder='Enter Email...'
					className='register-input'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor=''>Password</label>
				<input
					type='password'
					placeholder='Enter Password...'
					className='register-input'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='register-submit' type='submit'>
					{/* <Link to='/register' className='link'> */}
					REGISTER
					{/* </Link> */}
				</button>
			</form>
			<button className='register-login-btn'>
				<Link to='/login' className='link'>
					LOGIN
				</Link>
			</button>
		</div>
	);
};

export default Register;
