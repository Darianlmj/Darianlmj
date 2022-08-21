import { Nav, Link, NavItem, NavWrapper, NavList, NavListItem, NavBarBrand } from './styles';

const NavBar = () => {
  return (
    <Nav>
      <NavItem>
        <NavBarBrand href='/'>Darianlmj</NavBarBrand>
      </NavItem>
      <NavItem>
        <NavWrapper>
          <NavList>
            <NavListItem>
              <Link 
                onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
              >
                Resume
              </Link>
            </NavListItem>
            <NavListItem>
              <Link 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Projects
              </Link>
            </NavListItem>
          </NavList>
        </NavWrapper>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
