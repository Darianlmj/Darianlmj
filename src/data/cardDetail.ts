import { Props } from '@components/Card/Card.astro';

export const cardList: Props[] = [
  {
    href: 'https://jobsboard.staging.csesoc.unsw.edu.au/',
    title: 'CSESoc Jobs Board',
    techStack: ['Vue', 'TypeScript', 'Express', 'Swagger', 'Postgres', 'TailwindCSS', 'Docker'],
    body: 'A web application where CSE students are able to find jobs.'
  },
  {
    href: 'https://recallify.cse.lol/',
    title: 'Recallify',
    techStack: ['React', 'TypeScript', 'Rust', 'Python', 'Stitches', 'Tailwind', 'twin.macros'],
    body: 'A Progressive Web Application (PWA) which scans and processes grocery receipts. It alerts users if anything on it has been recalled. Made as part of the UniHack 2023 Hackathon.',
  },
  {
    href: 'https://darianlmj.dev/',
    title: 'Portfolio Website',
    techStack: ['React', 'Typescript', 'Astro', 'Stitches'],
    body: 'The website you\'re currently on.',
  }, 
  {
    href: 'https://calloc.app/',
    title: 'Calloc',
    techStack: ['SolidJS', 'Rust', 'Stitches'],
    body: 'An event management system for university societies made as a Progressive Web Application (PWA).',
  }, 
  {
    href: 'https://circles.csesoc.app/',
    title: 'Circles',
    techStack: ['Vue', 'NodeJS', 'Express', 'Swagger', 'Postgres', 'TailwindCSS'],
    body: 'A degree planner for UNSW students.',
  }, 
  {
    href: 'https://cookies-sh.web.app/',
    title: 'Cookies.sh',
    techStack: ['React', 'TypeScript', 'MUI'],
    body: 'A web application which aims to teach anybody about the basics in security engineering.',
  },
  {
    href: 'https://www.unswaseansociety.com/',
    title: 'ASEANSoc Website',
    techStack: ['React', 'TypeScript', 'NextJS', 'MUI'],
    body: 'UNSW ASEANSoc\'s primary website.',
  }, 
  {
    href: 'https://github.com/Darianlmj/Asteroids/',
    title: 'Asteroids',
    techStack: ['C++'],
    body: 'A command line program based off the popular arcade game - Asteroids.',
  }
];