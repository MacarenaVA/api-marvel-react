import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Container } from "react-bootstrap"

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <h1>Comics de Marvel</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar
