import Link from 'next/link'
import Image from 'next/image'
import { getCoverImage, getGames } from './services/videogames'
import { Datum } from './types.d'

export default async function Home() {
  const games: Datum[] = await getGames()

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      {games.map(({ attributes, id }) => (
        <Link
          key={id}
          href='#'
          className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        >
          <Image
            width={300}
            height={300}
            className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
            src={getCoverImage(attributes)}
            alt={attributes.title}
          />
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {attributes.title}
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {attributes.description[0].children[0].text}
            </p>
          </div>
        </Link>
      ))}
    </main>
  )
}
