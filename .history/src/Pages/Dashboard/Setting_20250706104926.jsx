import React from 'react';
import { FiUser, FiMail, FiLock, FiGlobe, FiBell, FiCreditCard } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

const Settings = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <IoSettingsOutline className="text-emerald-400 text-2xl mr-3" />
          <h1 className="text-2xl font-bold text-emerald-100">Settings</h1>
        </div>

        {/* Settings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Account Settings */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiUser className="text-emerald-400 mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Account Information</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Username</span>
                <span className="text-emerald-100">kinzafatima</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Email</span>
                <span className="text-emerald-100">kinza@example.com</span>
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-emerald-800/50 hover:bg-emerald-700/50 text-emerald-100 rounded-lg transition-all">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Security */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiLock className="text-emerald-400 mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Security</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Password</span>
                <span className="text-emerald-400">••••••••</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">2FA</span>
                <span className="text-emerald-400">Disabled</span>
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-emerald-800/50 hover:bg-emerald-700/50 text-emerald-100 rounded-lg transition-all">
                Change Password
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiBell className="text-emerald-400 mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-emerald-950/70 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-emerald-400 after:border-emerald-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600/50"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Push Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-emerald-950/70 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-emerald-400 after:border-emerald-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600/50"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiGlobe className="text-emerald-400 mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Preferences</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-emerald-300 mb-2">Language</label>
                <select className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-emerald-300 mb-2">Timezone</label>
                <select className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>(UTC) London</option>
                  <option>(UTC+05:00) Pakistan</option>
                  <option>(UTC-05:00) New York</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Danger Zone */}
        <div className="mt-8 bg-rose-900/20 backdrop-blur-sm rounded-xl p-6 border border-rose-800/50">
          <h2 className="text-lg font-semibold text-rose-100 mb-4">Danger Zone</h2>
          <div className="space-y-4">
            <button className="w-full py-2 px-4 bg-rose-800/50 hover:bg-rose-700/50 text-rose-100 rounded-lg transition-all">
              Deactivate Account
            </button>
            <button className="w-full py-2 px-4 bg-rose-900/70 hover:bg-rose-800/50 text-rose-100 rounded-lg transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;