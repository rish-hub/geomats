/* eslint-disable */
import React, { useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import Image from "next/image";
import logo from "../../../assets/images/logos/green-logo.png";
import logo2 from "../../../assets/images/logos/white-logo.png";
import image from "next/image";
import Link from 'next/link';


const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      {/* <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Header/Navigation</h1>
              <h6 className="subtitle">
                Here you can check Demos we created you can easily use it. Its
                quite easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div> */}
      {/* <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="#">
              <Image src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Work</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Services <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem>Separated link</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>One more separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#">Freebies</NavLink>
                </NavItem>
                <NavItem>
                  <a className="btn btn-outline-info" href="#">
                    Hire Me
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
      */}
      <div className="header1 po-relative bg-light">
        <Navbar className="navbar-expand-lg h12-nav bg-danger-gradiant" >
          <Container>
            <div className="flex" style={{ color: "#fff" }} >
              <CallOutlinedIcon style={{ color: "#fff" }} /> Phone : + 91 8097674213
            </div>
          </Container>
        </Navbar>
        <Container >
          <Navbar className="navbar-expand-lg h2-nav" >

            <NavbarBrand href="#">
              {/* <Image src={logo2} alt="wrapkit" /> */}
              Geomats International
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active" >
                  <Link style={{ color: 'black', background: 'blue', padding: "75%" }} href="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link style={{ color: 'black' }} href="/aboutme">About Us</Link>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav style={{ padding: 0 }}>
                    <div style={{ color: 'blue' }}>
                      Services <i className="fa fa-angle-down m-l-5"></i>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Coming Soon</DropdownItem>
                    {/* <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem>Separated link</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>One more separated link</DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link style={{ color: 'black', background: 'blue' }} href="/contactus">Contact</Link>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="#">Work</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Freebies</NavLink>
                </NavItem>
                <NavItem>
                  <a className="btn btn-info" href="#">
                    Hire Me
                  </a>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;
