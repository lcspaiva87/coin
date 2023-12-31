import clsx from 'clsx'

export const Eye = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      className={clsx('fill-secondary', className)}
    >
      <path
        fillRule="evenodd"
        d="M1.451 7.731c.718-1.327 1.74-2.563 2.902-3.461 1.165-.9 2.433-1.433 3.654-1.433 1.222 0 2.49.532 3.655 1.433 1.162.898 2.183 2.134 2.901 3.462a.19.19 0 0 1 0 .177c-.717 1.328-1.739 2.564-2.9 3.462-1.166.9-2.434 1.433-3.656 1.433-1.22 0-2.489-.533-3.654-1.433-1.162-.898-2.184-2.134-2.902-3.462a.189.189 0 0 1 0-.178Zm0 0-.526-.284.526.285Zm6.556-6.09c-1.565 0-3.084.677-4.386 1.683C2.316 4.332 1.19 5.7.4 7.163c-.22.41-.22.905 0 1.314.79 1.463 1.917 2.831 3.222 3.84C4.923 13.323 6.441 14 8.007 14c1.566 0 3.085-.677 4.386-1.683 1.306-1.008 2.432-2.377 3.223-3.839.22-.41.22-.905 0-1.314-.79-1.463-1.917-2.832-3.223-3.84-1.301-1.006-2.82-1.683-4.386-1.683ZM6.72 6.53A1.823 1.823 0 1 1 9.296 9.11 1.823 1.823 0 0 1 6.72 6.532Zm-.806-.805a2.962 2.962 0 1 1 4.189 4.189 2.962 2.962 0 0 1-4.189-4.189Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
