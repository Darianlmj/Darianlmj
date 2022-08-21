import { PillsContainer, Pills, ActivePill, CenteredBox } from './styles';
import { useStore } from '@nanostores/react';
import { activePill } from 'src/stores/store';


export const TechStackPills = () => {
  const $activePill = useStore(activePill);

  const changeActivePill = (pill: string) => {
    activePill.set(pill);
  };

  return (
    <PillsContainer>
      <CenteredBox>
        {
          $activePill === 'languages' 
            ? (<ActivePill onClick={() => changeActivePill('languages')}>Languages</ActivePill>) 
            : (<Pills onClick={() => changeActivePill('languages')}>Languages</Pills>)
        }
      </CenteredBox>
      <CenteredBox>
        {
          $activePill === 'frameworks' 
            ? (<ActivePill onClick={() => changeActivePill('frameworks')}>Frameworks</ActivePill>) 
            : (<Pills onClick={() => changeActivePill('frameworks')}>Frameworks</Pills>)
        }
      </CenteredBox>
      <CenteredBox>
        {
          $activePill === 'tools' 
            ? (<ActivePill onClick={() => changeActivePill('tools')}>Tools</ActivePill>) 
            : (<Pills onClick={() => changeActivePill('tools')}>Tools</Pills>)
        }
      </CenteredBox>
    </PillsContainer>
  );
};
