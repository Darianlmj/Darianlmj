// import { FaBars } from "react-icons/fa";
import { Nav, MobileIcon, Link, NavItem, NavWrapper, NavList, NavListItem } from './styles';
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
        {/* TODO: Put brand */}
      </NavItem>
      <NavItem>
        <NavWrapper>
          <NavList>
            <NavListItem>
              <Link href="/">Home</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/about">About Me</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/resume">Resume</Link>
            </NavListItem>
            <NavListItem>
              <Link href="/posts">Posts</Link>
            </NavListItem>
          </NavList>
        </NavWrapper>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
