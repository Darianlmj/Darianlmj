import { Nav, MobileIcon, Link, NavItem, NavWrapper, NavList, NavListItem, NavBarBrand } from './styles';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

const isToggled = atom(false);

const NavBar = () => {

  const $isToggled = useStore(isToggled);

  const toggle = () => {
    isToggled.set(!$isToggled);
  };

  return (
    <Nav>
      <MobileIcon onClick={toggle}>
        {/* <FaBars /> */}
      </MobileIcon>
      <NavItem>
        <NavBarBrand href='/'>Darianlmj</NavBarBrand>
      </NavItem>
      <NavItem>
        <NavWrapper>
          <NavList>
            <NavListItem>
              <Link href='/'>Resume</Link>
            </NavListItem>
            <NavListItem>
              <Link href='/resume'>Projects</Link>
            </NavListItem>
          </NavList>
        </NavWrapper>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
