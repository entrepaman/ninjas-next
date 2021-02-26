import Head from 'next/head';

const Metas = ({ metas }) => {
	return (
		<Head>
			<title>{metas.title}</title>
			<meta name="keywords" content={metas.keywords} />
			<meta name="description" content={metas.description} />
		</Head>
	);
};
export default Metas;
