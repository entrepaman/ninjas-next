import Link from 'next/link';
import Metas from '../components/Metas';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Metas
				metas={{
					title: 'Ninjas | Home',
					keywords: 'ninjas',
					description: 'Ninjas',
				}}
			/>
			<div>
				<h1 className={styles.title}>Home</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut cumque
					commodi, culpa eius expedita iste nulla asperiores corrupti accusamus! Fugit
					quidem expedita dicta unde optio a veritatis iure repudiandae?
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut cumque
					commodi, culpa eius expedita iste nulla asperiores corrupti accusamus! Fugit
					quidem expedita dicta unde optio a veritatis iure repudiandae?
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninjas Listing</a>
				</Link>
			</div>
		</>
	);
}
