import React from "react";
import "./styles/view.css";
import { Home } from "../components/home";
import { About } from "../components/about";
import { Dashboard } from "../components/dashboard";
import { Header } from "../components/header";
import { Link } from "react-router-dom";

export const View = () => {
  return (
    <li className="container">
      <Link to="/Home">
        <Home />
      </Link>
      <Link to="/About">
        <About />
      </Link>
      <Link to="/Dashboard">
        <Dashboard />
      </Link>
      <Link to="/Header">
        <Header />
      </Link>
    </li>
  );
};
