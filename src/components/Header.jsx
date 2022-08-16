import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">{'<Home />'}</Link>
        <Link to="/sobre">{'<Sobre />'}</Link>
        <Link to="/projetos">{'<Projetos />'}</Link>
        <button type="button">
          <Link to="/contato">{'<Contato />'}</Link>
        </button>
      </nav>
    </header>
  );
}
