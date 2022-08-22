import skills  from '../../data/tech';
import { DisplayContainer, Pill, Image } from './styles';
import { useStore } from '@nanostores/react';
import { activePill } from 'src/stores/store';

export const TechStackDisplay = (): JSX.Element => {
  const $activePill = useStore(activePill);

  return (
    <DisplayContainer>
      {
        skills.map((skill: object) =>
          skill[$activePill].map((item: any, index: number) => (
            <Pill key={index}>
              <Image src={item.link} alt={item.name} />
              {item.name}
            </Pill>
          ))
        ) 
      }
    </DisplayContainer>
  );
};
