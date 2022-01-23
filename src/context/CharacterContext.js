import React, { createContext } from 'react';

const CharacterContext = createContext({
	characters: [],
	loading: false,
});

export default CharacterContext;
