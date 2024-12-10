import Image from 'next/image';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import jobsboard from '@/public/assets/jobsboard.jpg';
import aseansoc from '@/public/assets/aseansoc.jpg';
import xtraCare from '@/public/assets/xtra-care.jpg';
import React from 'react';
const features = [
  {
    name: 'Jobsboard',
    description: 'A web application where UNSW Computer Science and Engineering students are able to find open jobs. Made as part of my tenure at the UNSW Computer Science and Engineering Society (CSESoc).',
    date: 'January - December 2022',
    tags: ['VueJS', 'TypeScript', 'Postgres', 'TailwindCSS', 'Docker'],
    background: <Image alt='Jobsboard' src={jobsboard} className='w-full max-h-[260px]'/>,
    className: 'lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2',
    website: 'https://jobsboard.staging.csesoc.unsw.edu.au/',
    sourceCode: 'https://github.com/Darianlmj/jobsboard'
  },
  {
    name: 'Recallify',
    description: 'A Progressive Web Application (PWA) which scans and processes grocery receipts. It alerts users if anything on it has been recalled. Made as part of the UniHack 2023 Hackathon.',
    date: 'January 2023',
    tags: ['ReactJS', 'TypeScript', 'Postgres', 'TailwindCSS', 'Docker'],
    className: 'lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1',
    design: 'https://www.figma.com/design/xAZ8yW9gkXkRYd7vTyoEXf/Recallify-(By-Plastic-team)?node-id=0-1&node-type=canvas&t=Fl0dAFLHwemVAJVV-0'
  },
  {
    name: 'Cookies.sh',
    description: 'A static web application which aims to teach anybody about the basics of security engineering.',
    date: 'January - April 2022',
    tags: ['ReactJS', 'TypeScript', 'MaterialUI'],
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-3',
    website: 'https://cookies-sh.web.app/'
  },
  {
    name: 'Circles',
    description: 'Made an open source contribution to update the website’s web manifest to improve SEO and user experience.',
    date: 'July 2022',
    tags: ['NodeJS'],
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2',
    sourceCode: 'https://github.com/devsoc-unsw/circles/issues/635'
  },
  {
    name: 'XTra Care',
    description: 'A feature added to the Cover Genius Payout widget that allows customer’s claiming their insurance payout to also donate a portion of the total amount to charity. Made as part of the Cover Genius GeniusHack 2024 Hackathon.',
    date: 'November 2024',
    tags: ['VueJS', 'Laravel', 'Postgres'],
    background: <Image className='w-full max-h-[260px]' alt='XTra Care' src={xtraCare}/>,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    name: 'ASEANSoc Website',
    description:
      'The official page for the UNSW ASEANSoc website. Made as part of my tenure at the UNSW ASEAN society (ASEANSoc).',
    date: 'January - December 2022',
    tags: ['ReactJS', 'TypeScript', 'MaterialUI', 'NextJS'],
    background: <Image className='w-full max-h-[260px]' alt='ASEANSoc' src={aseansoc} />,
    className: 'lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-3',
    website: 'https://www.unswaseansociety.com/'
  },
  {
    name: 'XPortal',
    description:
      'A web application designed to help streamline partner onboarding by centralising everything they would need in one convenient place. Generate API Keys, search up documentation, monitor API uptime and more. Made as part of the Cover Genius GeniusHack 2023 Hackathon. Won first place.',
    date: 'December 2023',
    tags: ['Figma', 'Postman'],
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-2',
    design: 'https://www.figma.com/design/gg6VSEoOBUyfPF4vESavox/App?node-id=0-1&node-type=canvas&t=VdiTndk5V9suL46t-0'
  },
  {
    name: 'Portfolio Website',
    description:
      'The website you are on. Made to showcase my work and projects.',
    date: 'December 2023',
    tags: ['ReactJS', 'NextJS', 'Figma'],
    className: 'lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-3',
    website: 'https://darianlmj.dev',
    sourceCode: 'https://github.com/Darianlmj/Darianlmj',
    design: 'https://www.figma.com/design/iKteXezUFqmrwWhyiUCLAM/Portfolio-Website-v3?node-id=0-1&t=qHNTsp6CCQGD6csy-1'
  },
];
const ProjectBentoGrid = () => {
  return (
    <BentoGrid className='lg:grid-rows-[1fr]'>
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default ProjectBentoGrid;