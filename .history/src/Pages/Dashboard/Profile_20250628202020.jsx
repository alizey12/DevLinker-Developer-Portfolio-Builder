import React from 'react'

const Profile = () => {
  return (
    <div>
  <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow">
  <img src="/avatar.png" alt="Avatar" className="w-28 h-28 rounded-full mx-auto" />
  <h2 className="text-center text-xl font-semibold mt-4">Kinza Fatima</h2>
  <p className="text-center text-gray-500">MERN Stack Developer</p>

  {/* Stats */}
  <div className="mt-6 space-y-2">
    <div className="flex justify-between">
      <span>Skills</span><span>12</span>
    </div>
    <div className="flex justify-between">
      <span>Projects</span><span>5</span>
    </div>
  </div>
</div>
div
    </div>
  )
}

export default Profile
