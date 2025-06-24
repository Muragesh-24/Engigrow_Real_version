import React from 'react'

function MainColab() {
  return (
    <div className="hero bg-[#FFFFFF] dark:bg-[#1f2937] min-h-screen flex flex-col items-center p-2">
 <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 mb-6 w-full ">
  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Start a Colaboration</h2>
  
  <form className="flex flex-col md:flex-row items-center gap-4">

    <label className="flex items-center space-x-2 cursor-pointer">
      <input type="file" accept="image/*" className="hidden" />
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v1a2 2 0 002 2h14a2 2 0 002-2v-1M12 12v.01M12 6v6m0 0v.01M6.6 20h10.8a2.6 2.6 0 002.6-2.6V6.6A2.6 2.6 0 0017.4 4H6.6A2.6 2.6 0 004 6.6v10.8A2.6 2.6 0 006.6 20z" />
        </svg>
      </div>
    </label>

    <input
      type="text"
      placeholder="What's on your mind?"
      className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
    >
      Post
    </button>
  </form>
</div>


</div>
  )
}

export default MainColab
