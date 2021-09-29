import '../../css/settings.css';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../components/Sidebar';
import { Context } from '../../context/Context';
import blogApi from '../../api/blog_api';

const Settings = () => {
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [success, setSuccess] = useState(false);
	const { user, dispatch } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({
			type: 'UPDATE_START',
		});
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append('name', filename);
			data.append('image', file);
			try {
				const res = await blogApi.post('/images', data);
				updatedUser.profilePic = res.data.path;
			} catch (err) {
				console.log(err);
			}
		}
		try {
			const res = await blogApi.post(`/user/${user._id}`, updatedUser);
			setSuccess(true);
			dispatch({
				type: 'UPDATE_SUCCESS',
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: 'UPDATE_FAILURE',
			});
		}
	};
	return (
		<div className='settings'>
			<div className='settings-wrapper'>
				<div className='settings-title'>
					<span className='settings-update-title'>Update Your Account</span>
					<span className='settings-delete-title'>Delete Account</span>
				</div>
				<form className='settings-form' onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className='settings-profile-picture'>
						<img
							src={file ? URL.createObjectURL(file) : user.profilePic}
							alt=''
						/>
						<label htmlFor='file-input'>
							<FontAwesomeIcon
								icon='user-circle'
								className='settings-profile-picture-icon'
							/>
							<input
								type='file'
								id='file-input'
								style={{ display: 'none' }}
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</label>
					</div>
					<label>Username</label>
					<input
						type='text'
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input
						type='email'
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.password)}
					/>
					<button type='submit' className='settings-submit'>
						Update
					</button>
					{success && (
						<span className='success-banner'>Profile has been updated</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;
