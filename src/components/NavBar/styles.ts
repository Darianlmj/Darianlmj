import {styled} from 'stitches.config';

export const Nav = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  boxShadow: '0 2px 4px rgb(50 50 93 / 10%)',
  backgroundColor: '#fff',
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
    backgroundColor: 'var(--color-text)',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease-in-out',
  },

  '&:hover::before': {
    transform: 'scaleX(1)',
  }
});

export const Button = styled('div', {
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
    backgroundColor: 'var(--color-text)',
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

export const NavBarBrand = styled('img', {
  width: '3rem',
  height: '3rem',
  marginLeft: '1rem',
});
  

