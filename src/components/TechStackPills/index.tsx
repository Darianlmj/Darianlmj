import { PillsContainer, Pills, ActivePill } from './styles';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

const pillActive = atom("languages");

const TechStackPills = () => {
  const $pillActive = useStore(pillActive);

  const changeActivePill = (pill: string) => {
    pillActive.set(pill);
  }

  return (
    <PillsContainer>
      {
        $pillActive === "languages" 
          ? (<ActivePill onClick={() => changeActivePill("languages")}>Languages</ActivePill>) 
          : (<Pills onClick={() => changeActivePill("languages")}>Languages</Pills>)
      }
      {
        $pillActive === "frameworks" 
          ? (<ActivePill onClick={() => changeActivePill("frameworks")}>Frameworks</ActivePill>) 
          : (<Pills onClick={() => changeActivePill("frameworks")}>Frameworks</Pills>)
      }
      {
        $pillActive === "tools" 
          ? (<ActivePill onClick={() => changeActivePill("tools")}>Tools</ActivePill>) 
          : (<Pills onClick={() => changeActivePill("tools")}>Tools</Pills>)
      }
    </PillsContainer>
  );
};

export default TechStackPills;
