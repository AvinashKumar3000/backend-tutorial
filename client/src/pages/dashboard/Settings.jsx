import React, { useState } from 'react';

const initialData = {
  details: {
    personal: {
      name: {
        firstName: 'Avi',
        lastName: 'Creation',
      },
      address: {
        city: 'New York',
        state: 'NY',
        country: 'USA',
      },
    },
    skills: {
      technical: ['JavaScript', 'React', 'Node.js'],
      soft: ['Communication', 'Problem-solving', 'Teamwork'],
    },
  },
};

const Settings = () => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e, path) => {
    const value = e.target.value;
    setFormData((prev) => {
      const updatedData = { ...prev };
      const keys = path.split('.');
      let current = updatedData;
      keys.slice(0, -1).forEach((key) => {
        current = current[key];
      });
      current[keys[keys.length - 1]] = value;
      return updatedData;
    });
  };

  const handleSave = () => {
    console.log('Saved Data:', formData);
    alert('Details saved successfully!');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Personal Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              value={formData.details.personal.name.firstName}
              onChange={(e) => handleInputChange(e, 'details.personal.name.firstName')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              value={formData.details.personal.name.lastName}
              onChange={(e) => handleInputChange(e, 'details.personal.name.lastName')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              value={formData.details.personal.address.city}
              onChange={(e) => handleInputChange(e, 'details.personal.address.city')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              value={formData.details.personal.address.state}
              onChange={(e) => handleInputChange(e, 'details.personal.address.state')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input
              type="text"
              value={formData.details.personal.address.country}
              onChange={(e) => handleInputChange(e, 'details.personal.address.country')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">Skills</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Technical Skills (comma-separated)</label>
            <input
              type="text"
              value={formData.details.skills.technical.join(', ')}
              onChange={(e) => handleInputChange(e, 'details.skills.technical')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Soft Skills (comma-separated)</label>
            <input
              type="text"
              value={formData.details.skills.soft.join(', ')}
              onChange={(e) => handleInputChange(e, 'details.skills.soft')}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <button
          onClick={handleSave}
          className="mt-6 w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Save Details
        </button>
      </div>
    </div>
  );
};

export default Settings;
