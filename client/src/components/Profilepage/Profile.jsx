import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("registrationForm");
    if (savedData) {
      const data = JSON.parse(savedData);
      setUserData(data);
      setFormData(data);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setUserData(formData);
    localStorage.setItem("registrationForm", JSON.stringify(formData));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Profile Page</h1>

        {Object.keys(userData).length === 0 ? (
          <p className="text-center text-gray-700">No user data available</p>
        ) : (
          <>
            {isEditing ? (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {Object.keys(userData).map((key) => (
                  <div className="flex flex-col" key={key}>
                    <label htmlFor={key} className="text-gray-700 font-semibold mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </label>
                    <input
                      type="text"
                      id={key}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleSave}
                    className="bg-green-500 text-white py-2 px-6 ml-4 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Save
                  </button>
                </div>
              </form>
            ) : (
              <>
                {Object.entries(userData).map(([key, value]) => (
                  <div className="mb-4" key={key}>
                    <label className="text-gray-700 font-semibold mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </label>
                    <p className="text-gray-800 bg-gray-100 p-3 rounded-lg">{value}</p>
                  </div>
                ))}
                <div className="text-center mt-8">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Edit Profile
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
