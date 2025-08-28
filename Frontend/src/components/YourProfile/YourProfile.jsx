import React from "react";
import profileImage from "../../assets/jawellarycontactPage.png"; // 👈 apna image yaha import karo

const YourProfile = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side Image */}
        <div className="relative h-64 md:h-auto">
          <img
            src={profileImage}
            alt="Profile Banner"
            className="absolute inset-0 w-full h-full object-cover md:object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-6 sm:p-10 md:p-12 flex items-center">
          <form className="w-full space-y-5">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Your Profile
            </h2>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* Phone Number */}
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* Address */}
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* Apartment */}
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* City, State, Zip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
            </div>

            {/* DOB */}
            <input
              type="date"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* Gender */}
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="male" />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="female" />
                <span>Female</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-800 text-white py-3 rounded-md hover:bg-teal-900 transition"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
