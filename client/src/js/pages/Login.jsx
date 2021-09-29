import '../../css/login.css';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import blogApi from '../../api/blog_api';

const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await blogApi.post('/signin', {
				email: userRef.current.value,
				password: passwordRef.current.value,
			});
			await sessionStorage.setItem('token', res.data.token);
			const { token, ...others } = res.data;
			dispatch({ type: 'LOGIN_SUCCESS', payload: others });
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE' });
		}
	};

	return (
		<div className='login'>
			<span className='login-title'>Login</span>
			<form className='login-form' onSubmit={handleSubmit}>
				<label htmlFor=''>Email</label>
				<input type='text' className='login-input' ref={userRef} />
				<label htmlFor=''>Password</label>
				<input type='password' className='login-input' ref={passwordRef} />
				<button className='login-submit' disabled={isFetching} type='submit'>
					LOGIN
				</button>
			</form>
			<button className='login-register-btn'>
				<Link to='/register' className='link'>
					REGISTER
				</Link>
			</button>
		</div>
	);
};

export default Login;
