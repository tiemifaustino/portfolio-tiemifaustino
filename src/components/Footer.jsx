import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <nav>
        <Link to="/">{'<GitHub />'}</Link>
        <Link to="/sobre">{'<LinkedIn />'}</Link>
        <Link to="/projetos">{'<Email />'}</Link>
      </nav>
    </footer>
  );
}
