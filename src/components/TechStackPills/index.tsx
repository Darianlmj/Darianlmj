import { PillsContainer, InactivePill, ActivePill } from './styles';
import { useStore } from '@nanostores/react';
import { activePill } from 'src/stores/store';


export const TechStackPills = () => {
  const $activePill = useStore(activePill);

  const changeActivePill = (pill: string) => {
    activePill.set(pill);
  };

  return (
    <PillsContainer>
      {
        $activePill === 'languages' 
          ? (<ActivePill onClick={() => changeActivePill('languages')}>Languages</ActivePill>) 
          : (<InactivePill onClick={() => changeActivePill('languages')}>Languages</InactivePill>)
      }
      {
        $activePill === 'frameworks' 
          ? (<ActivePill onClick={() => changeActivePill('frameworks')}>Frameworks</ActivePill>) 
          : (<InactivePill onClick={() => changeActivePill('frameworks')}>Frameworks</InactivePill>)
      }
      {
        $activePill === 'tools' 
          ? (<ActivePill onClick={() => changeActivePill('tools')}>Tools</ActivePill>) 
          : (<InactivePill onClick={() => changeActivePill('tools')}>Tools</InactivePill>)
      }
    </PillsContainer>
  );
};
