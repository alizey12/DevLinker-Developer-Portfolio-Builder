import React, { useState } from 'react'
import { FaUserTag } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const Profile = () => {
  const [formData, setformData] = useState([
    name,
    title,
    bio,
    website
  ]
    
  });
  // const [name, setName] = useState('');
  // const [bio, setBio] = useState('');
  // const [title, setTitle] = useState('');
  // const [website, setWebsite] = useState('');
  const [savedProfile, setSavedProfile] = useState({
    name: 'Kinza Fatima',
    title: 'MERN Stack Developer',
    bio: 'Passionate MERN Stack developer crafting clean and user-focused web apps.',
    website: 'https://kinzadevportfolio.web.app',
  });;


  function handleSubmit(e) {
    e.preventDefault()
    console.log(name,bio,title,website)
    // setSavedProfile({ name, title, bio, website })
    setSavedProfile(setformData)
  }
  return (
    <div>
    <div className="flex flex-col  md:flex-row gap-6">
      {/* Left: Profile Card */}
      <div className="w-full md:w-1/2 bg-gray-900 text-white  p-6 rounded-lg shadow">
        <img
        src='src/assets/profile-avatar.jpeg' 
          className="w-48 h-48 bg-gray-300 rounded-full mx-auto"
        />
        <h2 className="text-center text-xl font-semibold mt-4">{savedProfile.name}  </h2>
        <p  className="text-center text-white">{savedProfile.title} </p>
        <h5  className="text-center text-slate-400">{savedProfile.bio} </h5>
        <p  className="text-center text-white">{savedProfile.website} </p>


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
      <div className="bg-gray-900 text-white w-full p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Bio &amp; other details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-400 text-sm">My Role</p>
          <p className="text-lg font-medium">Front-end Developer</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">My Experience Level</p>
          <p className="text-lg font-medium">Intermediate</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">My Core Skills</p>
          <p className="text-lg font-medium">React, Tailwind CSS, JavaScript (ES6+)</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">My Favorite Framework</p>
          <p className="text-lg font-medium">React.js</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Preferred Tooling</p>
          <p className="text-lg font-medium">Vite, Webpack, Git</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">My Preferred Development Mood</p>
          <p className="text-lg font-medium">Focused &amp; Creative</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">My City or Region</p>
          <p className="text-lg font-medium">Rawalpindi, Pakistan</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Availability</p>
          <span className="inline-block mt-1 px-3 py-1 text-sm bg-green-600 text-white rounded-full">
          Open to Freelance & Collaboration
          </span>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Badges</p>
          <span className="inline-flex items-center gap-2 mt-1 px-3 py-1 text-sm bg-blue-600 text-white rounded-full">
            <FaUserTag size={14} />JavaScript Enthusiast
          </span>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Tags</p>
          <div className="flex flex-wrap gap-2 mt-2">
             <span className="bg-gray-700 text-sm px-2 py-1 rounded">#React</span>
            <span className="bg-gray-700 text-sm px-2 py-1 rounded">#TailwindCSS</span>
            <span className="bg-gray-700 text-sm px-2 py-1 rounded">#JavaScript</span></div>
        </div>
      </div>
      </div>
      </div>
      {/* social media  */}
      <div className='w-full my-4 rounded-md slashed-zero bg-gray-900 text-white p-6'>
      <h2 className="text-xl font-semibold mb-4">Social media</h2>
<ul className='flex'>
  <li className='p-2'><a href="https://www.linkedin.com/in/kinza-jamshaid-70212a215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a> </li>
  <li className='p-2'>  <a href="mailto:alizey121@gmail.com" target="_blank" rel="noopener noreferrer" ><SiGmail size={25} /> </a></li>
</ul>
</div>

      <div className='w-full my-4 rounded-md slashed-zero bg-gray-900 text-white p-6'>
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block  text-sm font-medium">Full Name</label>
            <input value={formData.name} onChange={(e)=>setformData({...formData, name: e.target.value})} type="text" className="w-full border text-black p-2 rounded" />
          </div>
          <div>
            <label className="block  text-sm font-medium">Title</label>
            <input value={formData.title} onChange={(e)=>setformData({...formData, title: e.target.value})} type="text" className="w-full border text-black p-2 rounded" />
          </div>
          <div>
            <label className="block  text-sm font-medium">Bio</label>
            <textarea value={formData.bio} onChange={(e)=>setformData({...formData, bio: e.target.value})} className="w-full border p-2 rounded text-black"></textarea>
          </div>
          <div>
            <label className="block  text-sm font-medium">Website</label>
            <input value={formData.website} onChange={(e)=>setformData({...formData, website: e.target.value})} type="url" className="w-full border p-2 text-black rounded" />
          </div>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
