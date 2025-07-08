import React, { useState, useEffect } from 'react'
import { FaUserTag } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from "../../assets/Leonardo.png";

const Profile = () => {
  const [savedProfile, setSavedProfile] = useState({
    name: 'Kinza Fatima',
    title: 'MERN Stack Developer',
    bio: 'Passionate MERN Stack developer crafting clean and user-focused web apps.',
    website: 'https://kinzadevportfolio.web.app',
  });

  const [formData, setformData] = useState(savedProfile);

  function handleSubmit(e) {
    e.preventDefault()
    setSavedProfile(formData)
    toast.success("Profile saved successfully!");
    localStorage.setItem('profileData', JSON.stringify(formData));
  }

  useEffect(() => {
    const storedData = localStorage.getItem('profileData')
    if (storedData) {
      const data = JSON.parse(storedData)
      setSavedProfile(data);
      setformData(data)
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Profile Card */}
        <div className="w-full md:w-1/2 bg-emerald-950 text-white p-6 rounded-lg shadow border border-emerald-900">
          <img
            src={img1}
            className="w-48 h-48 bg-emerald-800 rounded-full mx-auto border-4 border-emerald-700"
          />
          <h2 className="text-center text-xl font-semibold mt-4 text-emerald-100">{savedProfile.name}</h2>
          <p className="text-center text-emerald-300">{savedProfile.title}</p>
          <h5 className="text-center text-emerald-400 mt-2">{savedProfile.bio}</h5>
          <p className="text-center text-emerald-300 mt-2">{savedProfile.website}</p>

          {/* Stats */}
          <div className="mt-6 space-y-2 text-emerald-200">
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

        {/* Right: Details Card */}
        <div className="bg-emerald-950 text-white w-full p-8 rounded-lg shadow-lg border border-emerald-900">
          <h2 className="text-2xl font-semibold mb-6 text-emerald-100">Bio &amp; other details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-emerald-400 text-sm">My Role</p>
              <p className="text-lg font-medium text-emerald-200">Front-end Developer</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">My Experience Level</p>
              <p className="text-lg font-medium text-emerald-200">Intermediate</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">My Core Skills</p>
              <p className="text-lg font-medium text-emerald-200">React, Tailwind CSS, JavaScript (ES6+)</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">My Favorite Framework</p>
              <p className="text-lg font-medium text-emerald-200">React.js</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">Preferred Tooling</p>
              <p className="text-lg font-medium text-emerald-200">Vite, Webpack, Git</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">My Preferred Development Mood</p>
              <p className="text-lg font-medium text-emerald-200">Focused &amp; Creative</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">My City or Region</p>
              <p className="text-lg font-medium text-emerald-200">Rawalpindi, Pakistan</p>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">Availability</p>
              <span className="inline-block mt-1 px-3 py-1 text-sm bg-emerald-600 text-white rounded-full">
                Open to Freelance & Collaboration
              </span>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">Badges</p>
              <span className="inline-flex items-center gap-2 mt-1 px-3 py-1 text-sm bg-emerald-700 text-white rounded-full">
                <FaUserTag size={14} />JavaScript Enthusiast
              </span>
            </div>

            <div>
              <p className="text-emerald-400 text-sm">Tags</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-emerald-900 text-sm px-2 py-1 rounded text-emerald-200">#React</span>
                <span className="bg-emerald-900 text-sm px-2 py-1 rounded text-emerald-200">#TailwindCSS</span>
                <span className="bg-emerald-900 text-sm px-2 py-1 rounded text-emerald-200">#JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className='w-full my-4 rounded-md bg-emerald-950 text-white p-6 border border-emerald-900'>
        <h2 className="text-xl font-semibold mb-4 text-emerald-100">Social media</h2>
        <ul className='flex'>
          <li className='p-2 text-emerald-300 hover:text-emerald-400 transition-colors'>
            <a href="https://www.linkedin.com/in/kinza-jamshaid-70212a215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </a>
          </li>
          <li className='p-2 text-emerald-300 hover:text-emerald-400 transition-colors'>
            <a href="mailto:alizey121@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail size={25} />
            </a>
          </li>
        </ul>
      </div>

      {/* Edit Profile Form */}
      <div className='w-full my-4 rounded-md bg-emerald-950 text-white p-6 border border-emerald-900'>
        <h2 className="text-xl font-semibold mb-4 text-emerald-100">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-emerald-300 text-sm font-medium">Full Name</label>
            <input
              value={formData.name}
              onChange={(e) => setformData({ ...formData, name: e.target.value })}
              type="text"
              className="w-full border border-emerald-700 bg-emerald-900 text-emerald-100 p-2 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-emerald-300 text-sm font-medium">Title</label>
            <input
              value={formData.title}
              onChange={(e) => setformData({ ...formData, title: e.target.value })}
              type="text"
              className="w-full border border-emerald-700 bg-emerald-900 text-emerald-100 p-2 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-emerald-300 text-sm font-medium">Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setformData({ ...formData, bio: e.target.value })}
              className="w-full border border-emerald-700 bg-emerald-900 text-emerald-100 p-2 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            ></textarea>
          </div>
          <div>
            <label className="block text-emerald-300 text-sm font-medium">Website</label>
            <input
              value={formData.website}
              onChange={(e) => setformData({ ...formData, website: e.target.value })}
              type="url"
              className="w-full border border-emerald-700 bg-emerald-900 text-green-100 p-2 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default Profile