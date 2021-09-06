import { Link } from 'react-router-dom';
import '../../css/register.css';

const Register = () => {
	return (
		<div className='register'>
			<span className='register-title'>Register</span>
			<form className='register-form'>
				<label htmlFor=''>Username</label>
				<input
					type='text'
					placeholder='Enter Username...'
					className='register-input'
				/>
				<label htmlFor=''>Email</label>
				<input
					type='email'
					placeholder='Enter Email...'
					className='register-input'
				/>
				<label htmlFor=''>Password</label>
				<input
					type='password'
					placeholder='Enter Password...'
					className='register-input'
				/>
				<button className='register-submit'>
					<Link to='/register' className='link'>
						REGISTER
					</Link>
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
