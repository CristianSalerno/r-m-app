const URL = 'https://rickandmortyapi.com/api/character';

export default async function getCharacters() {
	const response = await fetch(URL)
		.then(res => res.json())
		.then(data => data);
	return response;
}
