import {styled} from 'stitches.config';

export const PillsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  padding: '0 0 1.2rem 0',
});

export const InactivePill = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '1.2rem',
  color: 'black',
  padding: '0.3rem 2rem 0.3rem 0',
  fontWeight: '600',
  cursor: 'pointer',
});

export const ActivePill = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '1.2rem',
  color: 'var(--blue-11)',
  padding: '0.3rem 2rem 0.3rem 0',
  fontWeight: '600',
  cursor: 'pointer',
});
  