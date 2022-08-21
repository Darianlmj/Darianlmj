import {styled} from 'stitches.config';

export const Nav = styled('header', {
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  padding: '1rem',
});

export const NavItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  zIndex: 10,
});

export const Link = styled('a', {
  color: 'var(--color-text-secondary)',
  marginRight: '1rem',
  textDecoration: 'none',
  position: 'relative',
  cursor: 'pointer',

  '&::before': {
    content: '',
    position: 'absolute',
    display: 'inline-block',
    width: '100%',
    height: '2px',
    bottom: -5,
    left: 0,
    backgroundColor: 'var(--color-primary)',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease-in-out',
  },

  '&:hover::before': {
    transform: 'scaleX(1)',
  }
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

export const NavBarBrand = styled('a', {
  fontSize: 'var(--font-size-lg)',
  fontWeight: 'bold',
  marginLeft: '1rem',
  width: 'fit-content',
  letterSpacing: '0.05rem',
  color: 'var(--color-text)',
  textDecoration: 'none',
});
  

