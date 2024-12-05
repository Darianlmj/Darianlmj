import Image from 'next/image';
import covergenius from '@/public/assets/covergenius.png';
import unsw from '@/public/assets/unsw.png';

const workExperience = [
  {
    company: 'Cover Genius',
    logo: covergenius,
    role: 'Fullstack Software Engineer',
    date: 'September 2023 - Present'
  },
  {
    company: 'The University of New South Wales',
    logo: unsw,
    role: 'Academic Tutor for COMP6080 - Introduction to Web Front End Programming',
    date: 'September 2022 - Present'
  },
  {
    company: 'Cover Genius',
    logo: unsw,
    role: 'Academic Tutor for COMP3511 - Human Computer Interaction',
    date: 'April - August 2023'
  },
];

const WorkExperienceList = () => {
  return (
    <div className='flex flex-col gap-8 flex-1'>
      {workExperience.map((job) => (
        <div key={job.role} className='flex gap-4 px-4 items-center'>
          <div className='rounded-full border border-slate-100 p-2'>
            <Image
              src={job.logo}
              alt={job.company}
              className='rounded-full'
              width={30}
              height={30}
            />
          </div>
          <div className='w-full'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <h4 className='text-sm font-semibold'>{job.company}</h4>
              <p className='text-sm text-slate-500'>{job.date}</p>
            </div>
            <div>
              <p className='text-sm text-slate-500'>{job.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceList;