import {styled} from 'stitches.config';

export const PillsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: '0 0 1.2rem 0',
});

export const Pills = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'var(--color-bg)',
  color: 'var(--color-text)',
  padding: '0.2rem 0.5rem',
  borderRadius: '0.4rem',
  cursor: 'pointer',
  margin: 0,
});

export const CenteredBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem 0 0 0'
});

export const ActivePill = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#cadfff',
  height: '1.2rem',
  color: 'var(--color-text)',
  padding: '0.2rem 0.25rem',
  borderRadius: '2rem',
  cursor: 'pointer',
  border: '0.15rem solid var(--color-primary)',
});
  