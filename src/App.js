import React, { useEffect, useState } from 'react';
import CharacterContext from './context/CharacterContext';
import getCharacters from './context/actions/getCharacters';
import CardComponent from './components/CardComponent';

//Styles
import './App.css';
import LoadingComponent from './components/Loading/LoadingComponent';

function App() {
	let [characters, setCharacters] = useState([]);
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		getCharacters()
			.then(res => {
				setCharacters(res.results);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);

	return loading ? (
		<div className="loading-wrapper">
			<LoadingComponent />
		</div>
	) : (
		<div className="app_wrapper">
			<CharacterContext.Provider value={characters}>
				{characters.map(character => {
					return <CardComponent character={character} key={Math.random()} />;
				})}
			</CharacterContext.Provider>
		</div>
	);
}

export default App;
