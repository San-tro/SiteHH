import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import './stle.css';
import  logo  from './logo2.png';




export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    }



  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
      return (
          <header>
              <head>
                  <meta charset="utf-8" />
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <meta name="csrf-token" content="wRsI4TfowuQu36DyB6AzHBUMAYpEVAjOAlr2BPv8" />

                  <title>SaitHH</title>

                  <link href="app.css" rel="stylesheet" />
                  <link href="stle.css" rel="stylesheet" />

                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
              </head>
              <nav class="navbar navbar-expand-lg navbar-light upper" >
                  <a class="navbar-brand" href="/">TMNWork</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon">logo</span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                          <li class="nav-item active">
                              <a class="nav-link one" href="/public/" >Главная <span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item active">
                              <a class="nav-link one" href="/Job" >Все вакансии <span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item two" />


                      </ul>
                      
                      <Navbar class="navol" light expand="md">

                          <Nav className="ml-auto navol" navbar>
                              
                              <UncontrolledDropdown setActiveFromChild>

                                  <DropdownToggle tag="a" className="nav-link" caret>
                                      
</DropdownToggle>
                                  <DropdownMenu>
                                      <DropdownItem tag="a" href="/Registration" active>Регистрация</DropdownItem>
                                      <DropdownItem tag="a" href="/Entry" active>Вход</DropdownItem>
                                  </DropdownMenu>
                              </UncontrolledDropdown>
                          </Nav>
                      </Navbar>
                      <img src={logo} class="logo" />

                  </div>
              </nav>
          </header>
      );
  }
    }

