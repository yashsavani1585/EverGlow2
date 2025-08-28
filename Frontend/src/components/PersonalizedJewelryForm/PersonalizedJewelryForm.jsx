import React from "react";
import divider from "../../assets/Formdesignadd.png";

const PersonalizedJewelryForm = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Divider Image */}
      <div className="flex items-center justify-center mb-8">
        <img src={divider} alt="divider" className="h-8 w-90" />
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name*"
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-900 outline-none placeholder-gray-500"
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-900 outline-none placeholder-gray-500"
          />
        </div>

        {/* Row 2 */}
        <input
          type="email"
          placeholder="Email Address*"
          required
          className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-900 outline-none placeholder-gray-500"
        />

        {/* Row 3 */}
        <select
          required
          className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-900 focus:border-yellow-900 text-gray-500"
        >
          <option value="" disabled selected className="text-gray-500">
            Choose Type
          </option>
          <option value="ring" className="text-gray-700" >Ring</option>
          <option value="necklace" className="text-gray-700">Necklace</option>
          <option value="bracelet" className="text-gray-700">Bracelet</option>
          <option value="earrings" className="text-gray-700">Earrings</option>
        </select>


        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
         
          <select
            required
            className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-900 focus:border-yellow-900 text-gray-500"
            defaultValue=""
          >
            <option value="" disabled className="text-gary-500">
              Metal Type
            </option>
            <option value="gold" className="text-gray-700">Gold</option>
            <option value="silver" className="text-gray-700">Silver</option>
            <option value="platinum" className="text-gray-700">Platinum</option>
            <option value="rose-gold" className="text-gray-700">Rose Gold</option>
          </select>

        </div>

        {/* File Upload */}
        <div>
          <label
            htmlFor="fileUpload"
            className="block w-full border rounded-md px-4 py-3 text-gray-500 cursor-pointer hover:bg-purple-50"
          >
            <input
              id="fileUpload"
              type="file"
              accept=".pdf, .jpg, .png, .jpeg, .doc, .docx"
              className="hidden"
            />
            <span className="text-gray-500 font-medium">Choose File</span>
          </label>
          <p className="text-gray-500 text-sm mt-2">
            Allowed types: pdf, jpg, png, jpeg, doc, docx.
          </p>
        </div>

        {/* Textarea */}
        <textarea
          rows="4"
          placeholder="Please describe your idea for this Custom Project..."
          className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-900 outline-none placeholder-gray-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#CEBB98]  text-white px-6 py-3 rounded-md shadow hover:bg-black transition w-full md:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalizedJewelryForm;
