import Link from 'next/link';

import Metas from '../../components/Metas';

import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	return {
		props: {
			ninjas: data,
		},
	};
};

const NinjasListing = ({ ninjas }) => {
	return (
		<>
			<Metas
				metas={{
					title: 'Ninjas | Listing',
					keywords: 'ninjas about',
					description: 'Ninjas Listing',
				}}
			/>
			<div>
				<h1>All Ninjas</h1>
				{ninjas.map(ninja => (
					<Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
						<a className={styles.single}>
							<h3>{ninja.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};
export default NinjasListing;
