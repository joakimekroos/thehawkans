import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      path: '/',
      name: 'Home',
      exact: true
    },
    {
      path: '/band',
      name: 'The Band & Music',
      exact: false
    },
    {
      path: '/contact',
      name: 'Contact',
      exact: false
    },
  ];

  const navItems = menuItems.map(item => (
    <li key={item.path}>
      <Link to={item.path}>
        <div className="navitem-wrapper">
          <span className="off">{ item.name }</span>
          <span className="on">{ item.name }</span>
        </div>
      </Link>
    </li>
  ));


  return (
    <>
    <nav>
      <ul
        className="test"
      >
      {navItems}
      </ul>
    </nav>
    </>
  )
}

export default Menu;

// import { NavLink } from 'react-router-dom';
// import { Container, Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

// import menuItems from '../menuItems';

// export default class Menu extends Component{

//   constructor(props){
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//       items: menuItems
//     }
//   }

//   toggle = function(){
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   render(){
//     const navItems = this.state.items.map(item => (
//       <NavItem key={item.path}>
//         <NavLink
//           exact={item.exact}
//           to={item.path}
//           activeClassName="active">
//             <div className="navitem-wrapper">
//               <span className="off">{ item.name }</span>
//               <span className="on">{ item.name }</span>
//             </div>
//         </NavLink>
//       </NavItem>
//     ));

//     return (
//       <div className="thehawkans-menu">
//         <Container>
//           <Navbar dark expand="md">
//             <NavbarToggler onClick={this.toggle} />
//             <Collapse isOpen={this.state.isOpen} navbar>
//               <Nav className="mr-auto" navbar>
//                 {navItems}
//               </Nav>
//             </Collapse>
//           </Navbar>
//         </Container>
//       </div>
//     )
//   }
// }
