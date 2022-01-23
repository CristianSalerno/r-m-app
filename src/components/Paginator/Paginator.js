import './Paginator.css';

export default function Paginator(props) {
	const pageNumbers = [];

	for (let i = 1; i <= props.pages; i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="paginator">
			{pageNumbers.map(page => {
				return (
					<li key={page} onClick={() => props.changePage(page)}>
						{page}
					</li>
				);
			})}
		</ul>
	);
}
