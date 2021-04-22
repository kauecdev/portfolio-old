import React from 'react';
import Image from 'next/image';

import { Header } from './styles';

const PageHeader = () => {
  return (
    <Header>
      <a href="/">
        <Image
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
    </Header>
  );
};

export default PageHeader;