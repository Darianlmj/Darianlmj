import Image from 'next/image'
import unsw from '@/public/assets/unsw.webp'

const educationList = [
  {
    school: 'The University of New South Wales',
    logo: unsw,
    qualification: 'Bachelor’s Degree of Computer Science w/ Distinction',
    date: 'April 2021 - August 2023'
  },
  {
    school: 'The University of New South Wales',
    logo: unsw,
    qualification: 'Diploma in Computer Science',
    date: 'May 2020 - April 2021'
  }
]

const EducationList = () => {
  return (
    <div className="flex flex-col gap-8 flex-1">
      {educationList.map((education) => (
        <div
          key={education.qualification}
          className="flex gap-4 px-4 items-center"
        >
          <div className="rounded-full border border-slate-100 p-2">
            <Image
              src={education.logo}
              alt={education.school}
              className="rounded-full"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89+LjfwAJGwO4McVDpwAAAABJRU5ErkJggg=="
              width={30}
              height={30}
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between">
              <h4 className="text-sm font-semibold">{education.school}</h4>
              <p className="text-sm text-secondary-foreground">
                {education.date}
              </p>
            </div>
            <div>
              <p className="text-sm text-secondary-foreground">
                {education.qualification}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EducationList
