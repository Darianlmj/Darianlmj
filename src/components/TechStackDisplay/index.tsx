import skills, { SkillItem }  from '../../data/tech';
import { DisplayContainer, Pill, Image } from './styles';
import { useStore } from '@nanostores/react';
import { activePill } from 'src/stores/store';

export const TechStackDisplay = (): JSX.Element => {
  const $activePill = useStore(activePill);

  return (
    <DisplayContainer>
      {
        skills[$activePill].map((item: SkillItem, index: number) => (
          <Pill key={index}>
            <Image src={item.link} alt={item.name} />
            {item.name}
          </Pill>
        ))
      }
    </DisplayContainer>
  );
};
