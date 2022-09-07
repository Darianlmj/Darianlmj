import { PillsContainer, InactivePill, ActivePill } from './styles';
import { useStore } from '@nanostores/react';
import { activePill } from 'src/stores/store';


export const TechStackPills = () => {
  const $activePill = useStore(activePill);

  const changeActivePill = (pill: string) => {
    activePill.set(pill);
  };

  const pills = ['Languages', 'Frameworks', 'Tools'];

  return (
    <PillsContainer>
      {
        pills.map((pill: string, index: number) => (
          $activePill === pill.toLowerCase() 
            ? (
              <ActivePill key={index} onClick={() => changeActivePill(pill.toLowerCase())}>
                {pill}
              </ActivePill>
            ) : (
              <InactivePill key={index} onClick={() => changeActivePill(pill.toLowerCase())}>
                {pill}
              </InactivePill>
            )
        ))
      }
    </PillsContainer>
  );
};
