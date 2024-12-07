import Image from 'next/image';
import darian from '@/public/assets/darian.jpeg';
import EducationList from './_components/education-list';
import HeroBanner from './_components/hero-banner';
import { InteractiveIconCloud } from './_components/interactive-icon-cloud';
import ProjectBentoGrid from './_components/projects-bento-grid';
import WorkExperienceList from './_components/work-experience-list';
import { PhotographyMarquee } from './_components/photography-marquee';
import { ContactList } from './_components/contact-list';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CameraIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className='items-center min-h-screen p-8 sm:px-32 sm:py-20 font-[family-name:var(--font-inter)]'>
      <main className='flex flex-col row-start-2 items-center sm:items-start'>
        <HeroBanner
          title={['Fullstack', 'based in Sydney, Australia']}
          description='I love experimenting and developing with exciting new technologies. I also dabble in  product design, illustration and photography.'
          focusWord='Software Engineer'
        />
        <div className='w-full pt-20 sm:px-10 lg:px-30 xl:px-60'>
          <section id='nerd-stuff' className='container mx-auto my-20'>
            <h2 className='scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
              Nerd&nbsp;
              <span className='text-[#438EDF]'>stack</span>
            </h2>
            <p className='leading-6 text-center text-sm font-medium text-slate-500'>
              I’ve used quite a range of technology so far. I primarily work
              with TypeScript with React/Vue and Laravel, but I love to learn
              new things.
            </p>
            <div className='flex justify-center items-center'>
              <InteractiveIconCloud />
            </div>
          </section>
          <section id='projects' className='container mx-auto my-20'>
            <h2 className='scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
              What have I&nbsp;
              <span className='text-[#438EDF]'>done</span>
            </h2>
            <p className='leading-6 text-center text-sm font-medium text-slate-500'>
              Check out some of the things that I’ve contributed and worked on
              in the past. I’ve worked on a variety of projects, from simple
              websites designs to coding complex web applications.
            </p>
            <ProjectBentoGrid />
          </section>
          <section
            id='experience'
            className='container flex flex-col md:flex-row mx-auto my-20 gap-4 justify-center items-center w-full'
          >
            <h2 className='scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex-2'>
              Work
              <br />
              <span className='text-[#438EDF]'>experience</span>
            </h2>
            <WorkExperienceList />
          </section>
          <section id='education' className='container mx-auto my-20'>
            <h2 className='scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex-2'>
              <span className='text-[#438EDF]'>Education</span>
            </h2>
            <EducationList />
          </section>
          <section id='about' className='container mx-auto my-20'>
            <h2 className='scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
              Just a little&nbsp;
              <span className='text-[#438EDF]'>background</span>
            </h2>
            <p className='leading-7 text-center text-sm font-medium text-slate-500'>
              I specialise in creating intuitive and user-centred interfaces for
              a wide range of projects and experiences.
            </p>
            <div className='flex flex-col gap-5 justify-center items-center py-4'>
              <Image
                src={darian}
                alt='Darian Lee'
                className='w-[18rem] rounded-md'
              />
              <div className='flex flex-col sm:flex-row gap-8 justify-center px-4 lg:px-20'>
                <p className='leading-6 text-sm text-justify flex-1'>
                  I love exploring new technologies — whether it&apos;s
                  experimenting with the latest JavaScript framework or geeking out
                  about the latest Apple product (yes, I proudly embrace being
                  an Apple fanboy). My passion lies in creating websites that
                  prioritize exceptional user experiences.
                </p>
                <p className='leading-6 text-sm text-justify flex-1'>
                  Beyond the tech world, I have recently gotten into photography,
                  experimenting with new lenses and cameras, and spending
                  countless hours in Lightroom. I’ve also developed a
                  love for bouldering — perhaps my way of staying active and
                  connecting with the outdoors.
                </p>
              </div>
            </div>
          </section>
          <section id='photography' className='container mx-auto my-20'>
            <h2 className='scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
              Interested in some <span className='text-[#438EDF]'>photography?</span>
            </h2>
            <p className='leading-6 text-center text-sm font-medium text-slate-500'>
              I’m also a hobbyist photographer that enjoys travel and street
              photography. I primarily shoot with a digital camera but I like to
              experiment around with other formats as well. Hoping to get my
              hands on a Leica M6 one day.
            </p>
            <div className='flex justify-center items-center pt-6'>
              <Link href='/photography' className='flex items-center gap-2'>
                <Button variant='secondary'>
                  <CameraIcon /> Check out some photos
                </Button>
              </Link>
            </div>
            <PhotographyMarquee />
          </section>
          <section id='contact' className='container mx-auto my-20'>
            <h2 className='scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
              Get in&nbsp;
              <span className='text-[#438EDF]'>contact</span>
            </h2>
            <p className='leading-6 text-center text-sm font-medium text-slate-500'>
              Interested in talking more about anything that you see here? Feel
              free to reach out.
            </p>
            <ContactList />
          </section>
        </div>
      </main>
    </div>
  );
}
