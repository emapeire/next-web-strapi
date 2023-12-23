import Link from 'next/link'
import Image from 'next/image'
import { getData } from './services/data'
import { PaginationData } from './components/PaginationData'

export interface searchParamsProps {
  searchParams: {
    page: number | string
  }
}

export default async function Home({ searchParams }: searchParamsProps) {
  const { page } = searchParams
  const { data, pagination } = await getData({ page: +page, pageSize: 1 })

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <section className='min-h-80'>
        {data.map(({ id, cover, title, description }) => (
          <Link
            key={id}
            href='#'
            className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
          >
            <Image
              priority
              width={250}
              height={250}
              className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
              src={cover}
              alt={title}
            />
            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {title}
              </h5>
              <div
                className='mb-3 font-normal text-gray-700 dark:text-gray-400'
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </Link>
        ))}
      </section>
      <PaginationData pagination={pagination} />
    </main>
  )
}
