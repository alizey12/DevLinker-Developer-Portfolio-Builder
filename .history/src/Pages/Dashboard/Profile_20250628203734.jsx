import React from 'react'
import myImage from "src/assets/profile-avatar.jpeg";
const Profile = () => {
  return (
    <div>
  
  <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow">
  <img src='' alt="Avatar" className="w-28 h-28 rounded-full mx-auto" />
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

<div>
<div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium">Full Name</label>
      <input type="text" className="w-full border p-2 rounded" />
    </div>
    <div>
      <label className="block text-sm font-medium">Title</label>
      <input type="text" className="w-full border p-2 rounded" />
    </div>
    <div>
      <label className="block text-sm font-medium">Bio</label>
      <textarea className="w-full border p-2 rounded"></textarea>
    </div>
    <div>
      <label className="block text-sm font-medium">Website</label>
      <input type="url" className="w-full border p-2 rounded" />
    </div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
  </form>
</div>

</div>
</div>
  
  )
}

export default Profile
