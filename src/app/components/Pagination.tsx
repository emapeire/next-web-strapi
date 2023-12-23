import { Meta } from '../types.d'

export function Pagination({ pagination }: Meta) {
  const { page, pageCount, total } = pagination
  const isFirstPage = page === 1
  const lastPage = page === pageCount

  return (
    <div className='flex flex-col items-center'>
      <span className='text-sm text-gray-700 dark:text-gray-400'>
        Showing{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {page}
        </span>{' '}
        to{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {pageCount}
        </span>{' '}
        of{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {total}
        </span>{' '}
        Entries
      </span>
      <div className='inline-flex mt-2 xs:mt-0'>
        <button className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
          <svg
            className='w-3.5 h-3.5 me-2 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 5H1m0 0 4 4M1 5l4-4'
            />
          </svg>
          Prev
        </button>
        <button className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
          Next
          <svg
            className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
