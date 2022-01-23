import { useCallback } from 'react';
import app from '../../firebase/base';

export function Login() {
	const handleLogin = useCallback(async event => {
		event.preventDefault();

		const { email, password } = event.target.elements;
		try {
			await app.auth().signInWithEmailAndPassword(email.value, password.value);
		} catch (err) {
			alert(err);
		}
	});

	return (
		<div>
			<h4>Login</h4>
			<form onSubmit={handleLogin}>
				<label>
					Email
					<input name="email" type="email" placeholder="email"></input>
				</label>
				<label>
					Password
					<input name="password" type="password" placeholder="password"></input>
				</label>
				<button type="submit"> Sign Up</button>
			</form>
		</div>
	);
}
