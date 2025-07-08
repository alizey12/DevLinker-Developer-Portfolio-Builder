import React, { useState } from 'react'



const Profile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [title, setTitle] = useState('');
  const [website, setWebsite] = useState('');
  const [savedProfile, setSavedProfile] = useState({
    name: 'Kinza Fatima',
    title: 'MERN Stack Developer',
    bio: 'Passionate MERN Stack developer crafting clean and user-focused web apps.',
    website: 'https://kinzadevportfolio.web.app',
  });;


  function handleSubmit(e) {
    e.preventDefault()
    console.log(name,bio,title,website)
    setSavedProfile({ name, title, bio, website })
  }
  return (
    <div>
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left: Profile Card */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow">
        <img
        src='Lenard'
          className="w-48 h-48 bg-gray-300 rounded-full mx-auto"
        />
        <h2 className="text-center text-xl font-semibold mt-4">{savedProfile.name}  </h2>
        <p  className="text-center text-gray-900">{savedProfile.title} </p>
        <h5  className="text-center text-gray-500">{savedProfile.bio} </h5>
        <p  className="text-center text-gray-500">{savedProfile.website} </p>


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
      <h2 className="text-xl font-semibold mb-4">Bio & other details</h2>

      </div>
      </div>
      <div className='w-full slashed-zero bg-white p-6'>
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Bio</label>
            <textarea value={bio} onChange={(e)=>setBio(e.target.value)} className="w-full border p-2 rounded"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Website</label>
            <input value={website} onChange={(e)=>setWebsite(e.target.value)} type="url" className="w-full border p-2 rounded" />
          </div>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
