import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Menu() {
  return (
    <Navbar sticky="top" bg="success" variant="dark">
      <Navbar.Brand href="/">Yak Yik</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Posts</Nav.Link>
        <Nav.Link href="/memes">Memes</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Menu;
