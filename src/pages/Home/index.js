import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu'
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((CategoriasComVideos) => {
        setDadosIniciais(CategoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);
  // http://localhost:8080/categorias?_embed=videos
  return (
    <PageDefault paddingAll={0}>
       {dadosIniciais.length === 0 && (<div>Loading...</div>)}

        {dadosIniciais.Length >= 1 && (
        <>
            <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
            />  

            <Carousel>
               ignoreFirstVideo
               category={dadosIniciais[0]}
            </Carousel>
        </>

      )} 
    </PageDefault> 
  );
}

export default Home;
