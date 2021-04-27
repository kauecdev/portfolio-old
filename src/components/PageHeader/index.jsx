import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';

import { Header } from './styles';

const PageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState('hide');
  
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickMenu() {
    toggleMenu();

    if (isOpen) {
      setVisibility('show');
    }
  }

  return (
    <Header>
      <div id="header-desktop">
        <a href="/">
          <img
            src="/assets/images/kc.png"
            alt="Kauê Cavalcante"
            width={60}
            height={75}
          />
        </a>
        <nav>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
      
      {isOpen
        ? <IoIosClose
            size={60}
            color="#ffffff"
            id="hamburguer"
            onClick={handleClickMenu}
          />
        : <BiMenuAltRight
            size={40}
            color="#ffffff"
            id="hamburguer"
            onClick={handleClickMenu}
          />
      }


        {isOpen &&
          <div
            id="header-mobile"
            onClick={handleClickMenu}
            className={visibility}
          >
            <a href="/">
              <img
                src="/assets/images/kc.png"
                alt="Kauê Cavalcante"
                width={60}
                height={75}
              />
            </a>
            <nav>
              <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </nav>
            <div>
              <a target="_blank" href="https://github.com/kauecdev">
                <FaGithub color="#fff" size={40} />
              </a>

              <a target="_blank" href="https://www.linkedin.com/in/kau%C3%AA-cavalcante-76683214b/">
                <FaLinkedin color="#fff" size={40} />
              </a>

              <a href="#contact">
                <GrMail color="#fff" size={40} />
              </a>
            </div>
          </div>
        }
    </Header>
  );
};

export default PageHeader;