import { Link } from 'react-router-dom';
import '../../css/login.css';

const Login = () => {
	return (
		<div className='login'>
			<span className='login-title'>Login</span>
			<form className='login-form'>
				<label htmlFor=''>Email</label>
				<input type='email' className='login-input' />
				<label htmlFor=''>Password</label>
				<input type='password' className='login-input' />
				<button className='login-submit'>
					<Link to='/login' className='link'>
						LOGIN
					</Link>
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
