import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';



class Header extends Component {
    render() {
        console.log(this.props);
        let renderItems = this.props.items.map((item, i) => {
            return (
                <NavItem href={item.link} key={i}>{item.name}</NavItem>
            )
        });

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{this.props.title}</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {renderItems}
                </Nav>
            </Navbar>
        );
    }
}

export default Header;