import React, { Component } from 'react';
import {NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap';
import avatar from "../icons/icons8-homer-simpson.svg"
import LogOut from './LogOut'



class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar   expand="md" bg="light" variant="light">
                    <Container >
                        <Navbar.Brand >
                            <img
                                alt="heading"
                                src={avatar}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Would You Rather
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="reponsive-navbar-bar" />
                        <Navbar.Collapse id="reponsive-navbar-bar">
                            <Nav>
                                <NavLink to="/" exact  className="link">Home</NavLink >
                                <NavLink to="/add" className="link">New Questions</NavLink >
                                <NavLink to="/leaderboard" className="link" >Leader Board</NavLink >
                            </Nav>
                            <LogOut />




                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Navigation;