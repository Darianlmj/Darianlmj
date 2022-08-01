import {styled} from 'stitches.config';

export const Nav = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
});

export const NavItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  zIndex: 10,
});

export const MobileIcon = styled('div', {
  display: 'none',
  color: '#fffafa',
  '@media screen and (max-width: 768px)': {
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translateY(-100%, 40%)',
    fontSize: '1.8rem',
    cursor: 'pointer'
  }
});

export const Link = styled('a', {
  color: '#000',
  opacity: 0.72,
  marginRight: '1rem',
  textDecoration: 'none'
});

export const NavWrapper = styled('nav', {
  display: 'flex'
});

export const NavList = styled('ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
});

export const NavListItem = styled('li', {
  listStyle: 'none'
});
  

