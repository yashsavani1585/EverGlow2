import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const termsData = [
  {
    title: "General Use and Acceptance",
    content:
      "By using our platform, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, you may not use the platform."
  },
  {
    title: "Account Responsibility",
    content:
      "You are responsible for maintaining the confidentiality of your account details and ensuring all information provided is accurate."
  },
  {
    title: "Product Information and Availability",
    content:
      "We strive to ensure product details are accurate; however, availability may change without prior notice."
  },
  {
    title: "Pricing and Payment",
    content:
      "All prices are subject to change. Payments must be completed using the methods available at checkout."
  },
  {
    title: "Order Confirmation and Delivery",
    content:
      "Orders are confirmed via email. Delivery timelines may vary depending on your location."
  },
  {
    title: "Promotions, Offers, and Discounts",
    content:
      "Promotions are subject to terms and may be withdrawn without notice."
  },
  {
    title: "User Conduct and Prohibited Activities",
    content:
      "You agree not to misuse the platform, engage in fraudulent activities, or violate applicable laws."
  },
  {
    title: "Intellectual Property",
    content:
      "All content, logos, and designs are the property of Crystova and protected by law."
  },
  {
    title: "Data Privacy and Security",
    content:
      "We prioritize the security of your data and handle it according to our Privacy Policy."
  },
  {
    title: "Third-Party Services and Links",
    content:
      "We are not responsible for third-party websites linked from our platform."
  },
  {
    title: "Feedback and User-Generated Content",
    content:
      "By submitting feedback, you grant us the right to use it to improve our services."
  },
  {
    title: "Disclaimer of Warranties",
    content:
      "We do not guarantee uninterrupted service or error-free operation of the platform."
  },
  {
    title: "Limitation of Liability",
    content:
      "We are not liable for damages arising from use of the platform beyond the value of the product purchased."
  },
  {
    title: "Indemnification",
    content:
      "You agree to indemnify Crystova against claims resulting from your misuse of the platform."
  },
  {
    title: "Termination",
    content:
      "We may terminate your access to the platform if you violate these Terms."
  },
  {
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms are governed by the laws of India and subject to Surat jurisdiction."
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms at any time. Continued use of the platform implies acceptance."
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about these Terms, please contact us via the details on our Contact page."
  }
];

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-6 md:px-20 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
          TERMS AND CONDITIONS
        </h1>

        {/* Intro Text */}
        <p className="text-gray-700 mb-6">
          Welcome to Crystova. These Terms and Conditions (“Terms”) apply to your access
          and use of the Crystova website, mobile application, and services (collectively,
          the “Platform”). By accessing or using our Platform, you agree to be bound by
          these Terms. If you do not agree, you should not use the Platform.
        </p>

        <p className="text-gray-700 mb-8">
          Crystova is committed to providing a seamless and secure shopping experience,
          and these Terms are designed to ensure transparency, trust, and mutual
          understanding between you, the user, and our company. Whether you are browsing
          our collections, making a purchase, participating in a promotional offer, or
          submitting feedback, these conditions outline your rights and obligations.
        </p>

        {/* Accordion Section */}
        <div className="space-y-4">
          {termsData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleSection(index)}
              >
                {item.title}
                {openIndex === index ? (
                  <FaMinus className="text-teal-600" />
                ) : (
                  <FaPlus className="text-teal-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
