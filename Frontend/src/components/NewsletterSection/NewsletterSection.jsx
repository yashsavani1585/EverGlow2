

import React from 'react';

// Main component for the Newsletter Subscription section
const Newsletter = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Heading */}
        <h2 
          className="text-4xl sm:text-5xl font-serif text-[#4f1c51]"
          style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
        >
          Subscribe to Our Newsletter
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Sign up to our newsletter for information on sales, delightful content and new additions to the collection
        </p>

        {/* Form */}
        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-full sm:w-auto flex-grow">
            <label htmlFor="email" className="sr-only">Enter your email</label>
            <input 
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f1c51] focus:border-transparent"
            />
          </div>
          <button 
            type="submit"
            className="w-full sm:w-auto bg-[#4f1c51] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#3d153e] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Privacy Policy Checkbox */}
        <div className="mt-6 flex items-center justify-start">
          <input 
            type="checkbox"
            id="privacy"
            className="h-4 w-4 text-[#4f1c51] border-gray-300 rounded focus:ring-[#4f1c51]"
          />
          <label htmlFor="privacy" className="ml-5 text-sm text-gray-600">
            I agree to the Privacy Policy.
          </label>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
