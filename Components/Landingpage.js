import React from 'react'

const Landingpage = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex  py-2 items-center justify-center flex-col">
    <img className="lg:w-auto md:w-auto w-auto mb-auto object-cover object-center rounded" alt="hero" src="https://i2.wp.com/www.eventstodayz.com/wp-content/uploads/2017/07/beautiful-message-for-teacher-on-teachers-day-2017.jpg?w=1920&ssl=1"/>
    <div className="text-center lg:auto w-auto">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">Happy Teacher's Day</h1>
      <p className="mb-8 leading-relaxed text-gray-900">Teacher’s Day is said to be as one of the favourite celebrations among all the students of the nation, especially for the children. Teacher’s Day is celebrated just like a festival to properly appreciate their teachers for all the efforts and sacrifices they made to brighten their student’s life and future.</p>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Landingpage