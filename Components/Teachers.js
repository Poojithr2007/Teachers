import React from 'react'
import Link from 'next/link'

const Teachers = () => {
  return (
    <div>
        <section className="text-gray-800 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800 mb-4">HERE ARE MY FAVORITE TEACHER'S</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">We are students and in our student life, we met a huge number of teachers. Among them, some are really special and that why everyone has a favorite teacher in their life</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-gray-800 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-800 text-lg title-font font-medium mb-3">Miss Esther</h2>
          <p className="leading-relaxed text-base">I am being taught by many teachers in my school. Every subject has a different teacher, but most of all I like my Math teacher. Her name is Esther and we call her Ma’am. She is our class teacher too.</p>
          <Link href="/Teacher1"><a className="mt-3 text-gray-800 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a></Link>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-gray-800 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-800 text-lg title-font font-medium mb-3">Miss Pushpa</h2>
          <p className="leading-relaxed text-base">My favourite teacher is my English teacher. Her name is Miss Pushapa.</p>
          <Link href="/Teacher2"><a className="mt-3 text-gray-800 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a></Link>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-gray-800 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-800 text-lg title-font font-medium mb-3">Gilbert sir</h2>
          <p className="leading-relaxed text-base">Gilbert sir is my favorite teacher. He teaches us History. The most important thing about Ramesh sir is he is the most talented and knowledgeable men in the whole school. I am a history lover and maybe that’s why he has become my favorite teacher.</p>
        </div>
      </div>
    </div>
    <Link href="/Teachers"><button className="flex mx-auto mt-16 text-white bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">All Teachers</button></Link>
  </div>
</section>
    </div>
  )
}

export default Teachers