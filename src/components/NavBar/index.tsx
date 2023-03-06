import image from 'src/assets/Profile.png';
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
        <NavBarBrand src={image} alt='Darianlmj' />
      </NavItem>
      <NavItem>
        <NavWrapper>
          <NavList>
            <NavListItem>
              <Link href='src/assets/Resume.pdf' target='_blank'>
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
