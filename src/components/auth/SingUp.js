import { useCallback } from 'react';
import app from '../../firebase/base';

export function SingUp() {
	const handleSingUp = useCallback(async event => {
		event.preventDefault();
		const [email, password] = event.target.elements;
		console.log(app.auth());
		try {
			await app
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value);
		} catch (err) {
			alert(err);
		}
	});

	return (
		<div>
			<h4>Sign Up</h4>
			<form onSubmit={handleSingUp}>
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
