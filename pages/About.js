import React from 'react'

const About = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-1 py-1 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-auto overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="img.jpg"/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
             <img alt="content" src="image.PNG"/>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Poojith R</h2>
            <div class="w-12 h-1 bg-gray-900 rounded mt-2 mb-4"></div>
            <p class="text-base"> HELLO !! Guys this is Poojith R from bangalore, India</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-gray-900">
          <p class="leading-relaxed text-lg mb-4">I am a student of Auxilium school, bandapura.
           I am studying in Grade 9.
            I am a full stack developer. 
          I am Expert in Html, Css, Javascript, Python, Nextjs, Reactjs, Java, C, C++, etc.
          Hobbies are drawing, programming, reading books(science,bio-graphs), and small poet.
          I all a bit mad about web series, movies, and astro-physics.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About