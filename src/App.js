import React, { useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import getCharacters from './context/actions/getCharacters';
import CardComponent from './components/CardComponent';

//Styles
import './App.css';
import LoadingComponent from './components/Loading/LoadingComponent';
import Paginator from './components/Paginator/Paginator';
import { SingUp } from './components/auth/SingUp';
import { Login } from './components/auth/Login';

function App() {
	let [user, setUser] = useState('');
	let [characters, setCharacters] = useState([]);
	let [loading, setLoading] = useState(true);
	let [totalPages, setTotalPages] = useState(null);
	let [page, setPage] = useState(1);

	console.log(user);

	useEffect(() => {
		getCharacters(page)
			.then(res => {
				setCharacters(res.results);
				setTotalPages(res.info.pages);
			})
			.then(() => {
				setLoading(false);
			});
	}, [page]);

	return loading ? (
		<div className="loading-wrapper">
			<LoadingComponent />
		</div>
	) : (
		<>
			<div className="app_wrapper">
				<UserContext.Provider value={user}>
					{!!user ? <SingUp /> : <Login />}
					{characters.map(character => {
						return <CardComponent character={character} key={Math.random()} />;
					})}
					<div className="paginator_container">
						<Paginator pages={totalPages} changePage={page => setPage(page)} />
					</div>
				</UserContext.Provider>
			</div>
		</>
	);
}

export default App;
