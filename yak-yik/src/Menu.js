import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Menu() {
  return (
    <header>
      <Navbar bg="success" variant="dark">
        <Navbar.Brand href="/">Yak Yik</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create-post">Create Post</Nav.Link>
          <Nav.Link href="/memes">Memes</Nav.Link>
          <Nav.Link href="/create-memes">Create Meme</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Menu;
