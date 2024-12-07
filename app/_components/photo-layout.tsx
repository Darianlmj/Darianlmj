import Image, { StaticImageData } from 'next/image';

const PhotoLayout = ({ photos }: { photos: StaticImageData[] }) => {
  return (
    <div
      className='grid gap-4'
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Ensure max 3-4 columns
        gridAutoFlow: 'dense', // Optimize grid placement
        gridTemplateRows: 'masonry', // For actual masonry
      }}
    >
      {photos.map((photo, index) => (
        <div key={index} className='relative overflow-hidden'>
          <Image
            src={photo}
            alt=''
            className='object-cover w-full h-auto'
            style={{ display: 'block' }}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoLayout;