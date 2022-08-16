import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import octocat from '../images/octocat-tiemi.png';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <h1>Sobre mim</h1>
        <section>
          <p>
            Olá, sou a Tiemi, amo café, música, filmes, doguinhos fofinhos
            e de tudo relacionado a tecnologia e inovação.
          </p>
          <p>
            Trabalhei como farmacêutica no varejo por 8 anos e aos 31 anos
            de idade (2021) decidi fazer a transição de carreira em tecnologia
            para ser Desenvolvedora Web e simplificar a vida das pessoas
            solucionando problemas por meio da programação.
          </p>
          <p>
            Acredito que ser farmacêutica me ajudou a desenvolver habilidades
            que são muito importantes na programação como ser atenta a detalhes
            e observadora, ser persistente e ter capacidade analítica para analisar
            e solucionar problemas.
          </p>
          <img src={octocat} alt="Imagem da octocat personalizada por Tiemi Faustino" width="400px" />
        </section>
        <section>
          <h2>Linguagens e ferramentas que conheço:</h2>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript" />
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
          <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
          <img src="https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white" alt="Bash" />
          <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
          <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
          <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
          <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
          <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
          <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
          <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
          <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="Sequelize" />
          <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" />
          <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
          <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" alt="Jest" />
          <img src="https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown" alt="Mocha" />
          <img src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red" alt="Chai" />
          <img src="https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon" alt="Sinon" />
          <img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white" alt="Trello" />
          <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white" alt="Notion" />
        </section>
      </main>
      <Footer />
    </>
  );
}
