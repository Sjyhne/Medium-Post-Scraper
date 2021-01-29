import React, {useState, useEffect} from 'react';
import Post from "./Post"
import '../css/App.css';
import { Container, Row, Col } from "react-bootstrap"
import "../css/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-bg static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Medium Services
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mailing List</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;