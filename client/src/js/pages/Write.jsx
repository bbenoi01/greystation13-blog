import '../../css/write.css';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Write = () => {
	return (
		<div className='write'>
			<img
				src='/matrix alt.jpg'
				alt='Lost in the Matrix'
				className='write-img'
			/>
			<form className='write-form'>
				<div className='write-form-group'>
					<label htmlFor='file-input'>
						{/* <IconButton> */}
						<FontAwesomeIcon icon='plus' className='write-icon' />
						{/* </IconButton> */}
					</label>
					<input type='file' id='file-input' style={{ display: 'none' }} />
					<input
						type='text'
						placeholder='Title'
						className='write-input'
						autoFocus
					/>
				</div>
				<div className='write-form-group'>
					<textarea
						cols='30'
						rows='10'
						placeholder='Tell your story...'
						className='write-input write-text'
					></textarea>
				</div>
				<button className='write-submit'>Publish</button>
			</form>
		</div>
	);
};

export default Write;
