import image1 from '@/public/assets/photography/japan/image1.jpg'
import image2 from '@/public/assets/photography/australia/image2.jpg'
import image3 from '@/public/assets/photography/south-korea/image3.jpg'
import image4 from '@/public/assets/photography/south-korea/image4.jpg'
import image5 from '@/public/assets/photography/south-korea/image5.jpg'
import image6 from '@/public/assets/photography/south-korea/image6.jpg'
import image7 from '@/public/assets/photography/south-korea/image7.jpg'
import image8 from '@/public/assets/photography/australia/image8.jpg'
import image9 from '@/public/assets/photography/japan/image9.jpg'
import image10 from '@/public/assets/photography/japan/image10.jpg'
import image11 from '@/public/assets/photography/japan/image11.jpg'
import image12 from '@/public/assets/photography/japan/image12.jpg'
import image13 from '@/public/assets/photography/australia/image13.jpg'
import image14 from '@/public/assets/photography/australia/image14.jpg'
import image15 from '@/public/assets/photography/japan/image15.jpg'
import image16 from '@/public/assets/photography/japan/image16.jpg'
import image17 from '@/public/assets/photography/japan/image17.jpg'
import image18 from '@/public/assets/photography/japan/image18.jpg'
import image19 from '@/public/assets/photography/australia/image19.jpg'
import { StaticImageData } from 'next/image'

export interface Photo {
  image: StaticImageData
  alt: string
  location: string
  tags: {
    location: string[]
    country: string
  }
}

export const photoCollections = [
  {
    location: 'Japan',
    thumbnail: {
      image: image1,
      alt: 'Ninenzaka, Kyoto',
      location: 'Kyoto, Japan',
      tags: {
        location: ['Kyoto', 'Japan'],
        country: 'Japan'
      }
    },
    photos: [
      image1,
      image9,
      image10,
      image11,
      image12,
      image15,
      image16,
      image18
    ]
  },
  {
    location: 'Australia',
    thumbnail: {
      image: image8,
      alt: 'Sydney Opera House',
      location: 'Sydney, Australia',
      tags: {
        location: ['Sydney', 'Australia'],
        country: 'Australia'
      }
    },
    photos: [image2, image8, image13, image14, image19]
  },
  {
    location: 'South Korea',
    thumbnail: {
      image: image7,
      alt: 'Gamcheon Culture Village, Busan',
      location: 'Busan, South Korea',
      tags: {
        location: ['Busan', 'South Korea'],
        country: 'South Korea'
      }
    },
    photos: [image3, image4, image5, image6, image7]
  }
]

const photos: Photo[] = [
  {
    image: image1,
    alt: 'Ninenzaka, Kyoto',
    location: 'Kyoto, Japan',
    tags: {
      location: ['Kyoto', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image2,
    alt: 'Sydney CBD',
    location: 'Sydney, Australia',
    tags: {
      location: ['Sydney', 'Australia'],
      country: 'Australia'
    }
  },
  {
    image: image3,
    alt: 'Outside Gyeongbokgung Palace, Seoul',
    location: 'Seoul, South Korea',
    tags: {
      location: ['Seoul', 'South Korea'],
      country: 'South Korea'
    }
  },
  {
    image: image4,
    alt: 'Gyeongbokgung Palace, Seoul',
    location: 'Seoul, South Korea',
    tags: {
      location: ['Seoul', 'South Korea'],
      country: 'South Korea'
    }
  },
  {
    image: image5,
    alt: 'Gyeongbokgung Palace, Seoul',
    location: 'Seoul, South Korea',
    tags: {
      location: ['Seoul', 'South Korea'],
      country: 'South Korea'
    }
  },
  {
    image: image6,
    alt: 'Street vendor',
    location: 'Jeju, South Korea',
    tags: {
      location: ['Jeju', 'South Korea'],
      country: 'South Korea'
    }
  },
  {
    image: image7,
    alt: 'Gamcheon Culture Village, Busan',
    location: 'Busan, South Korea',
    tags: {
      location: ['Busan', 'South Korea'],
      country: 'South Korea'
    }
  },
  {
    image: image8,
    alt: 'Sydney Opera House',
    location: 'Sydney, Australia',
    tags: {
      location: ['Sydney', 'Australia'],
      country: 'Australia'
    }
  },
  {
    image: image9,
    alt: 'Old man painting',
    location: 'Kiyomizu-dera, Kyoto',
    tags: {
      location: ['Kyoto', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image10,
    alt: 'Namba Yasaka Shrine',
    location: 'Osaka, Japan',
    tags: {
      location: ['Osaka', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image11,
    alt: 'Temple in Nara',
    location: 'Nara, Japan',
    tags: {
      location: ['Nara', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image12,
    alt: 'Baby deer',
    location: 'Nara, Japan',
    tags: {
      location: ['Nara', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image13,
    alt: 'Town hall, Sydney',
    location: 'Sydney, Australia',
    tags: {
      location: ['Sydney', 'Australia'],
      country: 'Australia'
    }
  },
  {
    image: image14,
    alt: 'Couple hugging',
    location: 'Sydney, Australia',
    tags: {
      location: ['Sydney', 'Australia'],
      country: 'Australia'
    }
  },
  {
    image: image15,
    alt: 'Chureito Pagoda',
    location: 'Fujikawaguchiko, Japan',
    tags: {
      location: ['Fujikawaguchiko', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image16,
    alt: 'Arashiyama Monkey Park',
    location: 'Kyoto, Japan',
    tags: {
      location: ['Kyoto', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image17,
    alt: 'Friends hugging',
    location: 'Lake Kawaguchi, Japan',
    tags: {
      location: ['Kawaguchiko', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image18,
    alt: 'Sanenzaka, Kyoto',
    location: 'Kyoto, Japan',
    tags: {
      location: ['Kyoto', 'Japan'],
      country: 'Japan'
    }
  },
  {
    image: image19,
    alt: 'Dog',
    location: 'Sydney, Australia',
    tags: {
      location: ['Sydney', 'Australia'],
      country: 'Australia'
    }
  }
]

export default photos
