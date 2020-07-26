import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    NavbarText
} from 'reactstrap';
import { AuthContext } from '../../App';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext
    const {state, dispatch} = useContext(AuthContext)
    return (
        < div >
         <Navbar color="light" light expand="md">
         <NavbarBrand href="/">WebStore</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                    </Nav>
                    <NavbarText>
                    </NavbarText>
                    <NavbarText>
                        <Button color="default"
                        onClick={()=>
                        dispatch({
                            type:"LOGOUT"
                        })}>
                            {state.isAuthenticated && (
                                <NavLink>"LOGOUT"</NavLink>
                            )}
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div >
    )
}

export default NavbarComp;