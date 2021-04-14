import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,NavItem ,NavLink} from 'reactstrap';
import { useState } from 'react';

export default function NavbarHome(){

   const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

   return (
      <Navbar style={{background: '#336399'}} light>
         <NavbarBrand style={{fontSize:'2rem', marginLeft:'2rem', color:'#FFF', fontWeight:'bold'}} href="/" className="mr-auto">Stork</NavbarBrand>
         <NavbarToggler style={{fontSize:'2rem', marginRight: '2rem',color:'#FFF', fontWeight:'bold'}} onClick={toggleNavbar} className="mr-2" />
         <Collapse isOpen={!collapsed} style={{height:'8rem'}} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink style={{fontSize:'1rem', marginLeft:'2rem', color:'#FFF', fontWeight:'bold'}} href="/pedidos/cadastro">Cadastrar Pedido</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:'1rem', marginLeft:'2rem', color:'#FFF', fontWeight:'bold'}} href="https://github.com/vittorugo">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
   )
}