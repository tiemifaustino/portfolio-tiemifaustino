import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import imageHome from '../images/tiemi-home.png';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <span>Olá, eu sou</span>
          <h1>Tiemi Faustino</h1>
          <h3>Desenvolvedora Web Full Stack</h3>
        </div>
        <img src={imageHome} alt="Foto de Tiemi Faustino" width="400px" />
      </main>
      <Footer />
    </>
  );
}
