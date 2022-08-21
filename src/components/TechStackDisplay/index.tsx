import skills  from '../../data/tech';
import { DisplayContainer, Pill, Image } from './styles';
import { useStore } from '@nanostores/react';
import { activePill } from 'src/stores/store';

export const TechStackDisplay = () => {
  const $activePill = useStore(activePill);

  return (
    <DisplayContainer>
      {
        $activePill === 'languages' &&
        skills.map(skill => (
          skill.languages.map(language => (
            <Pill key={language.name}>
              <Image src={language.link} alt={language.name} />
              {language.name}
            </Pill>
          ))
        ))
      }
      {
        $activePill === 'frameworks' &&
        skills.map(skill => (
          skill.frameworks.map(framework => (
            <Pill key={framework.name}>
              <Image src={framework.link} alt={framework.name} />
              {framework.name}
            </Pill>
          ))
        ))
      }
      {
        $activePill === 'tools' &&
        skills.map(skill => (
          skill.tools.map(tool => (
            <Pill key={tool.name}>
              <Image src={tool.link} alt={tool.name} />
              {tool.name}
            </Pill>
          ))
        ))
      }
    </DisplayContainer>
  );
};
