import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

import { 
  HomeSection, 
  TextBlock, 
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from '../styles/styles.index';

import Header from '../src/components/PageHeader';

toast.configure();
export default function Home() {
  const [windowSize, setWindowSize] = useState(0);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: false
  });

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  function handleServerResponse(ok, form) {
    setServerState({
      submitting: false,
      status: ok,
    });
    if (ok) {
      form.reset();
    }
  };

  function handleSubmitForm(e) {
    e.preventDefault();
    const form = e.target;

    setServerState({
      submitting: true,
      status: serverState.status,
    });

    axios({
      method: 'post',
      url: 'https://formspree.io/xyylkgjq',
      data: new FormData(form),
    })
      .then(response => {
        handleServerResponse(true, form);
        toast.success('E-mail enviado com sucesso!', {
          position: windowSize > 800 
            ? toast.POSITION.TOP_RIGHT
            : toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch(response => {
        handleServerResponse(false, form);
        toast.error('Erro! Tente novamente.', {
          position: windowSize > 800 
            ? toast.POSITION.TOP_RIGHT
            : toast.POSITION.BOTTOM_RIGHT,
        });
      })
  }
  
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

        <a href="#contact">
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

      <ExperienceSection id="experience">
        <h2>Experiência</h2>

        <div>
          <div id="timeline-bar">
            <div className="experience-wrapper first-experience">
              <img
                src="/assets/icons/elliptic.png"
                alt="Elliptic Technology"
                className="logo"
              />
              <img
                src="/assets/icons/Arrow-Blue.svg"
                alt="Flecha"
                className="arrow-right"
              />
              <div>
                <h3>Desenvolvedor Front-end</h3>
                <p className="company">Elliptic Technology</p>
                <p>ago/2020 - Presente</p>
                <br/>
                <p>
                  Responsável pelo desenvolvimento e manutenção das interfaces
                  web projetadas.
                </p>
              </div>
            </div>

            <div className="experience-wrapper second-experience">
              <div>
                <h3>Estagiário de desenvolvimento Front-end</h3>
                <p className="company">Mundiware</p>
                <p>nov/2020 - abr/2021</p>
                <br/>
                <p>
                Responsável pela manutenção de portais de clientes, 
                acompanhamento do desenvolvimento de novas features, 
                monitoramento e correção de erros.
                </p>
              </div>
              <img
                src="/assets/icons/Arrow-Blue.svg"
                alt="Flecha"
                className="arrow-right"
              />
              <img
                src="/assets/icons/mundiware.png"
                alt="Mundiware"
                className="logo"
              />
            </div>
          </div>
        </div>
      </ExperienceSection>

      <ProjectsSection id="projects">
        <h2>Projetos</h2>

        <div className="projects-container">
          <a target="_blank" href="http://empreendedorismoufpi.com.br/">
            <img
              src="/assets/images/liga.png"
              alt="Liga Acadêmica de Empreendedorismo do Piauí"
            />
            <h3>
              Site da Liga Acadêmica de Empreendedorismo do Piauí
            </h3>
          </a>

          <a target="_blank" href="https://github.com/kauecdev/tech.iz">
            <img
              src="/assets/images/techiz.png"
              alt="Liga Acadêmica de Empreendedorismo do Piauí"
            />
            <h3>
              Jogo de perguntas e respostas sobre o mundo da tecnologia 
            </h3>
          </a>
        </div>

        <div className="projects-container">
          <a target="_blank" href="https://github.com/kauecdev/ecoflix-projeto-alura-imersao-react">
            <img
              src="/assets/images/ecoflix.png"
              alt="Liga Acadêmica de Empreendedorismo do Piauí"
            />
            <h3>
              Projeto desenvolvido durante a Imersão React da Alura
            </h3>
          </a>
        </div>

        <span>
          Esses são alguns dos projetos da qual participei/criei, mas no 
          meu github você pode encontrar muito mais, clique e venha conferir!
        </span>

        <div id="go-github">
          <img src="/assets/icons/Octocat.svg" alt="Octocat" />
          <a target="_blank" href="https://github.com/kauecdev">
            Meu github
            <img
              src="/assets/icons/Arrow-Right.svg"
              alt="Flecha"
            />
          </a>
        </div>
      </ProjectsSection>
      
      <ContactSection id="contact">
        <h2>Entre em contato comigo!</h2>

        <div>

          <a target="_blank" href='https://br.freepik.com/vetores/mulher'>
            <img 
              src="/assets/images/send-mail.svg" 
              alt="Enviar e-mail"  
            />
          </a>

          <form onSubmit={handleSubmitForm}>
            <label htmlFor="nome">
              Nome<span>*</span>:
            </label>
            <input
              id="nome"
              type="text" 
              name="nome"
              placeholder="Digite seu nome aqui..."
              required
            />
            <label htmlFor="email">
              E-mail<span>*</span>:
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              required
              placeholder="Digite seu e-mail aqui..."
            />
            <label htmlFor="message">
              Mensagem<span>*</span>:
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Digite sua mensagem aqui..."
            />
            <button type="submit" disabled={serverState.submitting}>
              Enviar
            </button>
          </form>
        </div>
        <span>
          Desenvolvido por Kauê Cavalcante com muito ❤️ © 2021
        </span>
      </ContactSection>

      <ToastContainer />
    </div>
  )
}
