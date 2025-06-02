'use client'

import { motion } from 'motion/react'
import useMasonry from '@/hooks/useMasonry'
import darianPhotography from '@/public/assets/darian-photography.webp'
import Image from 'next/image'
import HeroBanner from '../_components/hero-banner'
import { ContactList } from '../_components/contact-list'
import photos from '@/data/photos'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TerminalSquareIcon } from 'lucide-react'
import PhotoCollection from '../_components/photo-collection'

export default function Page() {
  const masonryContainer = useMasonry()

  return (
    <div className="items-center min-h-screen p-8 sm:px-32 sm:py-20 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HeroBanner
          title={['Part-time', 'based in Sydney, Australia']}
          description="Software enginner by day, photographer by later-day (sometimes night). I love capturing moments that I see when I’m walking in the streets or travelling."
          focusWord="Photographer"
        />
        <div className="w-full">
          <section id="photos" className="container mx-auto my-20">
            <div
              ref={masonryContainer}
              className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89+LjfwAJGwO4McVDpwAAAABJRU5ErkJggg=="
                    className="object-cover w-full h-auto block"
                  />
                  <p className="text-sm text-secondary-foreground">
                    {photo.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
          <section id="collections" className="mx-auto my-20">
            <PhotoCollection />
          </section>
          <section id="about" className="container mx-auto my-20">
            <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Just a little&nbsp;
              <span className="text-[#438EDF]">background</span>
            </h2>
            <p className="leading-7 text-center text-sm font-medium text-secondary-foreground">
              I am passionate about capturing incredible scenic views and also
              moments that are brimming with raw authenticity.
            </p>
            <div className="flex flex-col gap-5 justify-center items-center py-4">
              <Image
                src={darianPhotography}
                alt="Darian Lee"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89+LjfwAJGwO4McVDpwAAAABJRU5ErkJggg=="
                className="w-[18rem] rounded-md"
              />
              <div className="flex flex-col sm:flex-row gap-8 justify-center px-4 lg:px-20">
                <p className="leading-6 text-sm">
                  Photography has recently become a passion of mine, sparked by
                  the simplicity and charm of a point-and-shoot camera. Since
                  then, I’ve immersed myself in exploring various lenses and
                  camera systems, constantly experimenting to expand my creative
                  horizons. While I primarily work with digital cameras, I’ve
                  recently developed an appreciation for the art of film
                  photography and have been enjoying the unique challenges it
                  brings.
                </p>
                <p className="leading-6 text-sm">
                  What I love most is capturing candid moments—whether wandering
                  through vibrant city streets or exploring new destinations.
                  I’ve been fortunate to travel to incredible places,
                  photographing scenes that inspire me. Through my lens, I
                  strive to tell stories and evoke emotions, hoping my photos
                  resonate with others and bring those moments to life.
                </p>
              </div>
            </div>
          </section>
          <section id="dev" className="container mx-auto my-20">
            <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Interested in some{' '}
              <span className="text-[#438EDF]">nerdy stuff?</span>
            </h2>
            <p className="leading-6 text-center text-sm font-medium text-secondary-foreground">
              When I&apos;m not behind a camera, I&apos;m behind a computer
              screen. I&apos;m a fullstack software engineer specialising in
              creating intuitive and user-centred interfaces <br />
              for a wide range of projects and experiences. Feel free to see
              what I&apos;ve been up to.
            </p>
            <div className="flex justify-center items-center pt-6">
              <Link href="/" className="flex items-center gap-2">
                <Button variant="secondary">
                  <TerminalSquareIcon /> Check out my profession
                </Button>
              </Link>
            </div>
          </section>
          <section id="contact" className="container mx-auto my-20">
            <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Get in&nbsp;
              <span className="text-[#438EDF]">contact</span>
            </h2>
            <p className="leading-6 text-center text-sm font-medium text-secondary-foreground">
              Interested in talking more about anything that you see here? Feel
              free to reach out.
            </p>
            <ContactList />
          </section>
        </div>
      </main>
    </div>
  )
}
