import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>React Structure</h1>
      <strong>Amostra do tema de cores</strong>
      <span>Amostra do tema de cores.</span>
      <p>Estrutura da pagina do hackaton d1, feito com React.</p>
    </Container>
  );
};

export default Home;
