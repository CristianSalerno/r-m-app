import React, { useEffect, useState } from 'react';
import CharacterContext from './context/CharacterContext';
import getCharacters from './context/actions/getCharacters';
import CardComponent from './components/CardComponent';

//Styles
import './App.css';
import LoadingComponent from './components/Loading/LoadingComponent';
import Paginator from './components/Paginator/Paginator';

function App() {
	let [characters, setCharacters] = useState([]);
	let [loading, setLoading] = useState(true);
	let [totalPages, setTotalPages] = useState(null);
	let [page, setPage] = useState(1);

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
				<CharacterContext.Provider value={characters}>
					{characters.map(character => {
						return <CardComponent character={character} key={Math.random()} />;
					})}
					<div className="paginator_container">
						<Paginator pages={totalPages} changePage={page => setPage(page)} />
					</div>
				</CharacterContext.Provider>
			</div>
		</>
	);
}

export default App;
