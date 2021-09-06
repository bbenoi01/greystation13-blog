import '../../css/settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../components/Sidebar';

const Settings = () => {
	return (
		<div className='settings'>
			<div className='settings-wrapper'>
				<div className='settings-title'>
					<span className='settings-update-title'>Update Your Account</span>
					<span className='settings-delete-title'>Delete Account</span>
				</div>
				<form className='settings-form'>
					<label>Profile Picture</label>
					<div className='settings-profile-picture'>
						<img src='/dj_greystation.jpg' alt='DJ GreyStation13' />
						<label htmlFor='file-input'>
							<FontAwesomeIcon
								icon='user-circle'
								className='settings-profile-picture-icon'
							/>
							<input type='file' id='file-input' style={{ display: 'none' }} />
						</label>
					</div>
					<label>Username</label>
					<input type='text' />
					<label>Email</label>
					<input type='email' />
					<label>Password</label>
					<input type='password' />
					<button className='settings-submit'>Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;
