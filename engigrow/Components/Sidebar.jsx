import React from 'react';

function SideBar() {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md h-full w-full rounded-2xl p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://i.pravatar.cc/100?img=3"
          alt="Profile"
          className="w-20 h-20 rounded-full shadow"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Muragesh</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Developer & Founder</p>
        <button className="mt-3 px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View Full Profile
        </button>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 dark:border-gray-700 mb-4" />

      {/* Notifications Section */}
      <div>
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Who viewed your profile</h3>

        <ul className="space-y-3">
          {/* Example views */}
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=4"
                alt="Viewer"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Amit Singh</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">2h ago</span>
          </li>

          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=5"
                alt="Viewer"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Sara Kumar</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Yesterday</span>
          </li>
        </ul>

        <button className="mt-4 w-full text-sm text-blue-600 dark:text-blue-400 hover:underline">
          See all views
        </button>
      </div>
    </div>
  );
}

export default SideBar;
