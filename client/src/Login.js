import Axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
	const [username, setUername] = useState('');
	const [password, setPassword] = useState('');
	const [loginStatus, setLoginStatus] = useState('');

	const login = () => {
		Axios.post('http://localhost:3001/login', {
			username: username,
			password: password,
		}).then((response) => {
			if (!response.data.message) {
				setLoginStatus(response.data.message);
			} else {
				setLoginStatus(response.data[0].message);
			}
		});
	};

	return (
		<div className="login">
			<h1>Login</h1>
			<input
				type="text"
				placeholder="Username…"
				onChange={(e) => {
					setUername(e.target.value);
				}}
			/>
			<br />
			<input
				type="password"
				placeholder="Password…"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<button onClick={login}>Login</button>
			<h1> {loginStatus}</h1>
		</div>
	);
}

export default Login;
