import './CardComponent.css';

export default function CardComponent(props) {
	return (
		<div className="container">
			<img src={props.character.image} alt="character img" />
			<h3>{props.character.name}</h3>
			<p>{props.character.gender}</p>
			<p>{props.character.species}</p>
			<p>{props.character.status}</p>
		</div>
	);
}
