'use client'

import React from 'react'
import photos from '@/data/photos'
import { motion } from 'motion/react'
import useMasonry from '@/hooks/useMasonry'
import { PhotoCard } from '@/app/_components/photo-card'
import HeroBanner from '@/app/_components/hero-banner'
import { ContactList } from '@/app/_components/contact-list'
import PhotoCollection from '@/app/_components/photo-collection'

const CountryPageWrapper = ({ country }: { country: string }) => {
  const masonryContainer = useMasonry()

  // Gets the photos for the country
  const countryPhotos = photos.filter((photo) => {
    const slugCountry = String(country).replaceAll('-', ' ').toLowerCase()
    const photoCountry = photo.tags.country.toLowerCase()
    return photoCountry === slugCountry
  })

  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <HeroBanner
        title={['Explore', 'with me, one photo at a time']}
        description={`I love capturing moments that I see when I’m walking in the streets or travelling. Here are some of the photos I took in ${String(
          country
        )
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(
            ' '
          )}. If you're interested in learning more about a particular photo, click on it for more.`}
        focusWord={String(country)
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      />
      <section id="country-photos" className="w-full py-16">
        <div className="container mx-auto">
          <motion.div
            ref={masonryContainer}
            className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-start gap-4 sm:grid-cols-3 md:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {countryPhotos.map((photo, index) => (
              <PhotoCard key={index} photo={photo} />
            ))}
          </motion.div>
        </div>
      </section>
      <section id="collections" className="container mx-auto my-20">
        <PhotoCollection />
      </section>
      <section id="contact" className="container mx-auto my-20">
        <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Get in&nbsp;
          <span className="text-[#438EDF]">contact</span>
        </h2>
        <p className="leading-6 text-center text-sm font-medium text-slate-500">
          Interested in talking more about anything that you see here? Feel free
          to reach out.
        </p>
        <ContactList />
      </section>
    </main>
  )
}

export default CountryPageWrapper
