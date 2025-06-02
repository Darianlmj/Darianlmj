'use client';
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const HeroBanner = ({
  title,
  description,
  focusWord
}: {
  title: string[]
  description: string
  focusWord: string
}) => {
  const location = usePathname();

  return (
    <section>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center'>
          <TypewriterEffectSmooth words={[{ text: "Hi there, I'm Darian" }]} />
            <h1 className='break-words whitespace-normal scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              {title[0]}&nbsp;
              <span className='bg-gradient-to-r from-[#7AE2E6] to-[#2461DB] bg-clip-text text-transparent'>
                {focusWord}
              </span>
              &nbsp;{title[1]}
            </h1>
            <p className='leading-6 [&:not(:first-child)]:mt-6 text-slate-400'>
              {description}
            </p>
          </div>
        </div>
        <div className='flex gap-2 mt-4 flex-col md:flex-row'>
          <Link
            href={
              location.includes('/photography')
                ? '/photography#photos'
                : '/#projects'
            }
          >
            <Button variant={'secondary'}>Check out my work</Button>
          </Link>
          <Link href='#contact'>
            <Button variant={'ghost'}>Connect with me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
