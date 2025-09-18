import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side - Contact Info */}
        {/* Left Side - Contact Info */}
<div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-10 flex flex-col justify-center">
  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
  <p className="mb-8 text-lg">
    Have any questions or want to work together? Feel free to reach out
    to me!
  </p>
  <div className="space-y-4">
    <div className="flex items-center space-x-3">
      <FaEnvelope className="text-2xl flex-shrink-0" />
     <span className="text-lg sm:text[5px] xs:text-sm break-words">
  satyendrachaudhary38@gmail.com
</span>


    </div>
    <div className="flex items-center space-x-3">
      <FaPhone className="text-2xl flex-shrink-0" />
      <span className="text-lg">+91 8840859444</span>
    </div>
    <div className="flex items-center space-x-3">
      <FaMapMarkerAlt className="text-2xl flex-shrink-0" />
      <span className="text-lg">India</span>
    </div>
  </div>
</div>


        {/* Right Side - Contact Form */}
        <div className="p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Form</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
