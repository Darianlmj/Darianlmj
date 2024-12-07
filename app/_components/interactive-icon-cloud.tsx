import IconCloud from '@/components/ui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'swift',
  'java',
  'react',
  'vuedotjs',
  'nuxtdotjs',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'antdesign',
  'c',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'rust',
  'tailwindcss',
  'figma',
  'materialui',
  'laravel',
  'php',
  'python',
  'vite',
  'vitest',
  'eslint',
  'prettier',
  'postman',
  'astro',
  'htmx',
  'express',
  'sass',
];

export function InteractiveIconCloud() {
  return (
    <div className='relative flex size-full min-w-[25rem] max-w-2xl items-center justify-center overflow-hidden rounded-lg px-20'>
      <IconCloud iconSlugs={slugs} />
      <h3 className='absolute px-2 py-2 top-[50%] backdrop-blur-sm rounded-md z-10 scroll-m-20 pb-2 text-lg md:text-3xl font-semibold tracking-tight first:mt-0'>Pokèmon</h3>
    </div>
  );
}
