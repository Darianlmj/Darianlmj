import {styled} from 'stitches.config';

export const DisplayContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start', 
  flex: 3,
  flexWrap: 'wrap',
  padding: '0 0 1.2rem 0',
  margin: '0 10%'
});

export const Pill = styled('div', {
  display: 'flex',
  width: 'fit-content',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'var(--color-text)',
  padding: '0.2rem 0.5rem',
  margin: '0.2rem 0.3rem',
  border: '0.1rem solid var(--color-text)',
  borderRadius: '0.4rem',
  height: '1.5rem'
});

export const Image = styled('img', {
  width: '1rem',
  height: '1rem',
  margin: '0.2rem',
});