import {styled} from 'stitches.config';

export const PillsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: 3,
  flexWrap: 'wrap',
  padding: '0 0 1.2rem 0',
})

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
})

export const ActivePill = styled('div', {
  background: '#cadfff',
  color: 'var(--color-text)',
  padding: '0.2rem 0.5rem',
  borderRadius: '2rem',
  cursor: 'pointer',
  border: '0.15rem solid var(--color-primary)',
})
  

