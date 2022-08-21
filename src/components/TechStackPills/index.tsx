import { PillsContainer, Pills, ActivePill } from './styles';
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
          : (<Pills onClick={() => changeActivePill('languages')}>Languages</Pills>)
      }
      {
        $activePill === 'frameworks' 
          ? (<ActivePill onClick={() => changeActivePill('frameworks')}>Frameworks</ActivePill>) 
          : (<Pills onClick={() => changeActivePill('frameworks')}>Frameworks</Pills>)
      }
      {
        $activePill === 'tools' 
          ? (<ActivePill onClick={() => changeActivePill('tools')}>Tools</ActivePill>) 
          : (<Pills onClick={() => changeActivePill('tools')}>Tools</Pills>)
      }
    </PillsContainer>
  );
};
