import {styled} from 'stitches.config';

export const PillsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  padding: '0 0 1.2rem 0',

  '@media screen and (max-width: 380px)': {
    flexDirection: 'column',
  }
});

export const InactivePill = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '1.2rem',
  color: 'black',
  padding: '0.3rem 0.5rem',
  fontWeight: '600',
  cursor: 'pointer',
  marginRight: '0.5rem',
  transition: 'all 0.15s ease-in-out',
  
  '&:hover': {
    backgroundColor: 'var(--blue-3)',
    borderRadius: '0.3rem',
  },
  
  '@media screen and (max-width: 380px)': {
    padding: '0.3rem 0'
  }
});

export const ActivePill = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '1.2rem',
  color: 'var(--blue-11)',
  padding: '0.3rem 0.5rem',
  marginRight: '0.5rem',
  backgroundColor: 'var(--blue-3)',
  borderRadius: '0.3rem',
  fontWeight: '600',
  cursor: 'pointer',

  '@media screen and (max-width: 380px)': {
    padding: '0.3rem 0'
  }
});
  