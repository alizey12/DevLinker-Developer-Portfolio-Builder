import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">Contact Me</h2>

        <div className="space-y-6 text-gray-700 text-lg">
          <div className="flex items-center gap-4">
            <Mail className="text-emerald-500" />
            <span>Email: kinzafatima@example.com</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-emerald-500" />
            <span>Phone: +92 300 1234567</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-emerald-500" />
            <span>Location: Karachi, Pakistan</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Feel free to reach out via email or phone!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;