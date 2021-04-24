import Head from 'next/head';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import { HomeSection, TextBlock, AboutSection } from '../styles/styles.index';

import Header from '../src/components/PageHeader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kauê Cavalcante</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        /> 
        <link rel="icon" href="/kc.ico" />
      </Head>

      <div id="social-media-links-container">
        <a target="_blank" href="https://github.com/kauecdev">
          <FaGithub color="#fff" size={30} />
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/kau%C3%AA-cavalcante-76683214b/">
          <FaLinkedin color="#fff" size={30} />
        </a>

        <a href="mailto:kaue_cavalcante.cnt@outlook.com">
          <GrMail color="#fff" size={30} />
        </a>
      </div>

      <HomeSection>
        <Header />

        <div>
          <TextBlock>
            <p>
              Hey,
            </p>
            <p>
              Eu sou o
            </p>
            <span className="myName">Kauê Cavalcante</span>
            <span className="subtitle">Desenvolvedor de software</span>
          </TextBlock>

          <figure>
            <img
              src="/assets/images/developer.png"
              alt="Desenvolvedor"
            />
          </figure>
          
        </div>

        <a id="go-about" href="#about">
          Vem me conhecer!
          <img
            src="/assets/icons/Arrow.svg"
            alt="Flecha"
          />
        </a>

      </HomeSection>

      <AboutSection id="about">
        <h2>Sobre mim</h2>

        <div>
          <div>
            <p>
              Sou estudante do curso superior de Análise e Desenvolvimento de 
              Sisemas no Instituto Federal do Piauí. Além da faculdade, estudo 
              diariamente sobre desenvolvimento web e mobile, lidando tanto com a 
              parte Front-end quanto Back-end.
            </p>
            <p>
              Iniciei meus estudos no final de 2019 e desde então continuo seguindo 
              nesta grande trilha que é o mundo da tecnologia, da qual sou 
              apaixonado. Mais abaixo você poderá encontrar mais informações 
              técnicas sobre mim, caso eu possa ajudar em algo, entre em contato 
              comigo!
            </p>
          </div>
          <figure>
            <img src="/assets/images/kaue.png" alt="Kauê Cavalcante"/>
          </figure>
        </div>

      </AboutSection>

    </div>
  )
}
