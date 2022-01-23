export default async function getCharacters(page) {
	const response = await fetch(
		`https://rickandmortyapi.com/api/character?page=${page}`,
	)
		.then(res => res.json())
		.then(data => data);
	return response;
}
