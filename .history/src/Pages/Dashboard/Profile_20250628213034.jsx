import React, { useState } from 'react'



const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
  title: '',
  bio: '',
  website: '',
  });
  function handleInput() {
    setFormData([...formData])
  }
  function handleSubmit(params) {
    
  }
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left: Profile Card */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow">
        <img
          src="https://static.vecteezy.com/system/resources/previews/036/473/336/original/ai-generated-asian-girl-as-a-modern-day-tech-entrepreneur-on-transparent-background-png.png"
          alt="Avatar"
          className="w-28 h-28 bg-gray-300 rounded-full mx-auto"
        />
        <h2 className="text-center text-xl font-semibold mt-4">Kinza Fatima</h2>
        <p className="text-center text-gray-500">MERN Stack Developer</p>

        {/* Stats */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between">
            <span>Skills</span>
            <span>12</span>
          </div>
          <div className="flex justify-between">
            <span>Projects</span>
            <span>5</span>
          </div>
        </div>
      </div>

      {/* Right: Edit Form */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input value={formData.value} onChange={(e)=>handleInput(e.target.value)} type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input value={formData.value} onChange={(e)=>handleInput(e.target.value)} type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Bio</label>
            <textarea value={formData.value} onChange={(e)=>handleInput(e.target.value)} className="w-full border p-2 rounded"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Website</label>
            <input value={formData.value} onChange={(e)=>handleInput(e.target.value)} type="url" className="w-full border p-2 rounded" />
          </div>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
