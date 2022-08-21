import {
  Nav,
  Button,
  Link,
  NavItem,
  NavWrapper,
  NavList,
  NavListItem,
  NavBarBrand,
} from './styles';

const NavBar = () => {
  return (
    <Nav>
      <NavItem>
        <NavBarBrand src='src/assets/Profile.png' ></NavBarBrand>
      </NavItem>
      <NavItem>
        <NavWrapper>
          <NavList>
            <NavListItem>
              <Link href="src/assets/Resume.pdf" download>
                Resume
              </Link>
            </NavListItem>
            <NavListItem>
              <Button
                onClick={() =>
                  document
                    .getElementById('projects')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Projects
              </Button>
            </NavListItem>
          </NavList>
        </NavWrapper>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
