'use client'

import Image from 'next/image'
import { photoCollections } from '@/data/photos'
import type { Photo } from '@/data/photos'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import PhotoSearchBar from './photo-search-bar'
import React from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

export const PhotoCollectionCard = ({
  photo,
  location
}: {
  photo: Photo
  location: string
}) => {
  return (
    <div
      className={cn(
        'group relative col-span-1 flex flex-1 flex-col justify-between overflow-hidden rounded-xl ',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className="relative">
        <div className="bg-slate-900 block size-full">
          <Image
            src={photo.image}
            alt={photo.alt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89+LjfwAJGwO4McVDpwAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="absolute inset-0 bg-slate-900 opacity-20"></div>
        <div className="flex flex-col gap-2 absolute bottom-4 left-4">
          <h4 className="scroll-m-20 text-md lg:text-xl font-semibold tracking-tight text-slate-100 select-none">
            {location}
          </h4>
          <Button
            variant="outline"
            asChild
            size="sm"
            className="pointer-events-auto text-neutral-700 dark:text-neutral-300"
          >
            <Link
              href={`/photography/${location
                .toLowerCase()
                .split(' ')
                .join('-')}`}
            >
              Explore
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const PhotoCollection = () => {
  const [photoCollection, setPhotoCollection] = React.useState(photoCollections)

  const filterPhotoCollection = (
    query: Record<string, DropdownMenuCheckboxItemProps['checked']>
  ) => {
    if (query) {
      const queryArray = Object.entries(query)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value)
        .map(([key]) => key)
      if (queryArray.length > 0) {
        const filteredCollection = photoCollections.filter((collection) =>
          queryArray.some(
            (country) => collection.thumbnail.tags.country === country
          )
        )
        setPhotoCollection(filteredCollection)
      }
    }
  }

  return (
    <>
      <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Looking for something more&nbsp;
        <span className="text-[#438EDF]">specific?</span>
      </h2>
      <p className="leading-6 text-center text-sm font-medium text-secondary-foreground">
        Check out some of my photo collections grouped by country. Find out more
        about each photo in the collection.
      </p>
      <div className="py-6">
        <PhotoSearchBar filterPhotoCollection={filterPhotoCollection} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photoCollection.map((collection, index) => (
          <PhotoCollectionCard
            key={index}
            photo={collection.thumbnail}
            location={collection.location}
          />
        ))}
      </div>
    </>
  )
}

export default PhotoCollection
