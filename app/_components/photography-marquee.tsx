import Image from 'next/image';
import Marquee from '@/components/ui/marquee';
import image1 from '@/public/assets/photography/japan/image1.jpg';
import image2 from '@/public/assets/photography/australia/image2.jpg';
import image3 from '@/public/assets/photography/south-korea/image3.jpg';
import image4 from '@/public/assets/photography/south-korea/image4.jpg';
import image5 from '@/public/assets/photography/south-korea/image5.jpg';
import image6 from '@/public/assets/photography/south-korea/image6.jpg';
import image7 from '@/public/assets/photography/south-korea/image7.jpg';
import image8 from '@/public/assets/photography/australia/image8.jpg';
import image9 from '@/public/assets/photography/japan/image9.jpg';
import image10 from '@/public/assets/photography/japan/image10.jpg';
import image11 from '@/public/assets/photography/japan/image11.jpg';
import image12 from '@/public/assets/photography/japan/image12.jpg';
import image13 from '@/public/assets/photography/australia/image13.jpg';
import image14 from '@/public/assets/photography/australia/image14.jpg';
import image15 from '@/public/assets/photography/japan/image15.jpg';
import image16 from '@/public/assets/photography/japan/image16.jpg';
import image17 from '@/public/assets/photography/japan/image17.jpg';

const photography = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];

const firstRow = photography.slice(0, photography.length / 2);
const secondRow = photography.slice(photography.length / 2);

export function PhotographyMarquee() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden py-6'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`image-${i}`}
            className='h-[75%] w-[75%] md:h-full md:w-full object-cover'
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`image-${i}`}
            className='h-[75%] w-[75%] md:h-full md:w-full object-cover'
          />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}
