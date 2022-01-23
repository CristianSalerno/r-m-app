import React, { useEffect, useState } from 'react';
import CharacterContext from './context/CharacterContext';
import getCharacters from './context/actions/getCharacters';
import CardComponent from './components/CardComponent';

//Styles
import './App.css';

function App() {
	let [characters, setCharacters] = useState([]);
	useEffect(() => {
		getCharacters().then(res => setCharacters(res.results));
	}, []);

	return (
		<div className="app_wrapper">
			<CharacterContext.Provider value={characters}>
				{characters.map(character => {
					return <CardComponent character={character} />;
				})}
			</CharacterContext.Provider>
		</div>
	);
}

export default App;
