import '../../css/write.css';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blogApi from '../../axios/blog_api';
import { Context } from '../../context/Context';

const Write = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append('name', filename);
			data.append('image', file);
			try {
				const res = await blogApi.post('/images', data);
				newPost.photo = res.data.path;
			} catch (err) {
				console.log(err);
			}
		}
		try {
			const savedPost = await blogApi.post('/post', newPost);
			window.location.replace('/post/' + savedPost.data._id);
		} catch (err) {}
	};

	console.log('File', file);

	return (
		<div className='write'>
			{file && (
				<img src={URL.createObjectURL(file)} alt='' className='write-img' />
			)}
			<form
				onSubmit={handleSubmit}
				encType='multipart/form-data'
				className='write-form'
			>
				<div className='write-form-group'>
					<label htmlFor='file-input'>
						<FontAwesomeIcon icon='plus' className='write-icon' />
					</label>
					<input
						name='image'
						type='file'
						id='file-input'
						style={{ display: 'none' }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						type='text'
						placeholder='Title'
						className='write-input'
						onChange={(e) => setTitle(e.target.value)}
						autoFocus
					/>
				</div>
				<div className='write-form-group'>
					<textarea
						cols='30'
						rows='10'
						placeholder='Tell your story...'
						className='write-input write-text'
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<button type='submit' className='write-submit'>
					Publish
				</button>
			</form>
		</div>
	);
};

export default Write;
