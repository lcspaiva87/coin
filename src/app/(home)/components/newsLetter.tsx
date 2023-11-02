
import Image from 'next/image'
import { NewsLetterForm } from './formNewsLetter'

export async function NewsLetter() {
  return (
    <section className="bg-gradient-newsletter relative mt-14 text-white">
      <Image
        src="/waves-newsletter.svg"
        width={1440}
        height={412}
        alt="waves-newsletter"
        aria-hidden
        className="absolute inset-0 h-full object-cover object-[60%] md:mt-0 md:object-[100%] lg:w-full lg:object-fill lg:object-left"
      />
      <div className="container isolate z-10 flex flex-col justify-center py-14 md:flex-row md:gap-8 md:py-20 lg:gap-[239px] ">
        <div className="md:w-full lg:w-[52rem]">
          <h2 className="font-bold text-primary-200 md:text-h5 md:!leading-8 lg:text-h4">
            Newsletter
          </h2>
          <p className="text-h4 font-bold md:text-h3 lg:mt-1 lg:text-h1">
            Lorem ipsum
          </p>
          <p className="mt-2 text-label md:mt-4 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{' '}
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>
        <NewsLetterForm />
    
      </div>
    </section>
  )
}
