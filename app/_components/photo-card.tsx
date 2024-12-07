import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Photo } from '@/data/photos';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

export function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className='flex flex-col gap-1 cursor-pointer'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={photo.image}
            alt={photo.alt}
            className='object-cover w-full h-auto block'
          />
          <p className='text-sm text-slate-500'>{photo.location}</p>
        </motion.div>
      </DialogTrigger>
      <DialogContent className='max-h-[90vh]'>
        <div className='bounding-grid grid sm:grid-cols-2 items-start gap-4 mt-4 sm:mt-0'>
          <div className='h-full flex justify-center'>
            <Image
              src={photo.image}
              alt={photo.alt}
              className={'object-contain max-h-[80vh]'}
            />
          </div>
          <div>
            <DialogTitle>{photo.alt}</DialogTitle>
            <DialogDescription>{photo.location}</DialogDescription>
            <div className='py-4 flex gap-2 flex-wrap'>
              {photo.tags.location.map((tag, index) => (
                <Badge
                  key={index}
                  variant='secondary'
                  className='text-xs px-2 py-1 rounded-sm font-bold font-[family-name:var(--font-jetbrains-mono)]'
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
