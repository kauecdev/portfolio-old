import Head from 'next/head';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { HomeSection, TextBlock } from './styles';

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
        <a>
          <FaGithub color="#fff" size={30} />
        </a>

        <a>
          <FaLinkedin color="#fff" size={30} />
        </a>

        <a>
          <FaInstagram color="#fff" size={30} />
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

            <a href="#about">
              Vem me conhecer!
              <img
                src="/assets/icons/Arrow.svg"
                alt="Flecha"
              />
            </a>
          </TextBlock>

          <figure>
            <img
              src="/assets/images/developer.png"
              alt="Desenvolvedor"
            />
          </figure>
          
        </div>

      </HomeSection>

    </div>
  )
}
