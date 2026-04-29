import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categorias from '../components/Categorias';
import Carrossel from '../components/Carrossel';
import Servicos from '../components/Servicos';
import ProjetosRealizados from '../components/Projetos';
import AvaliacoesGoogle from '../components/Avaliacoes';
import ContatoLocalizacao from '../components/Contato';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Madeireira Xavier</title>
        <meta name="description" content="Madeireira Xavier - Fornecedora de madeiras de alta qualidade para construção, marcenaria e projetos personalizados." />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Categorias />
        <Carrossel />
        <Servicos />
        <ProjetosRealizados />
        <AvaliacoesGoogle />
        <ContatoLocalizacao />
        <Footer />
      </main>
    </>
  );
}