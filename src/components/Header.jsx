import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to='/'>{'<Home />'}</Link>
          <Link to='/sobre'>{'<Sobre />'}</Link>
          <Link to='/projetos'>{'<Projetos />'}</Link>
          <button type='button'>
            <Link to='/contato'>{'<Contato />'}</Link>
          </button>
        </nav>
      </header>
    )
  }
}
