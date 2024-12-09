import React from 'react'
import photos from '@/data/photos'
import CountryPageWrapper from '@/app/_components/country-page-wrapper'

export async function generateStaticParams() {
  return photos.map((photo) => ({
    country: photo.tags.country.toLowerCase().replaceAll(' ', '-')
  }))
}

const Page = async ({ params }: { params: Promise<{ country: string }> }) => {
  const { country } = await params

  return <CountryPageWrapper country={country} />
}

export default Page
