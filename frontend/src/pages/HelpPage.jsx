import React, { useState } from 'react';

const HelpPage = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      question: 'How do I start learning from this website?',
      answer: 'Go to the Tutorials section, choose a topic, and follow the step-by-step guide. Each tutorial includes code snippets, explanations, and live previews.'
    },
    {
      question: 'Why is my code not working?',
      answer: 'Check for typos, missing imports, or incorrect file paths. Use the browser console to identify errors. Refer to our Troubleshooting section below.'
    },
    {
      question: 'Can I ask questions or request tutorials?',
      answer: 'Yes! Use the feedback form below or email us directly. We love hearing from learners.'
    },
    {
      question: 'How do I run the code locally?',
      answer: 'Copy the code into your editor, install dependencies with npm or yarn, and run using `npm start`. Setup instructions are included in each tutorial.'
    },
    {
      question: 'What if I face CORS or deployment issues?',
      answer: 'Check our Deployment Guide and CORS Debugging Toolkit (coming soon). We also provide platform-specific tips for Vercel, Render, and Netlify.'
    }
  ];

  const troubleshootingTips = [
    '🧪 Check your browser console for errors.',
    '📦 Ensure all required packages are installed (`npm install`).',
    '🌐 Verify backend is running and CORS is configured.',
    '🔍 Use our CORS Debugging Toolkit (coming soon).',
    '📁 Double-check file structure and import paths.',
    '🔐 Ensure authentication logic is correctly implemented.'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Future: Send feedback to backend or store locally
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Help & Support</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧭 Getting Started</h2>
        <p className="text-gray-700">Welcome to our tutorial hub! Whether you're a beginner or experienced developer, this platform helps you learn by building real projects.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Troubleshooting Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {troubleshootingTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📬 Contact Us</h2>
        <ul className="text-gray-700 space-y-1">
          <li>Email: <a href=" satyendrachaudhary38@gmail.com" className="text-blue-600 underline"> satyendrachaudhary38@gmail.com</a></li>
          <li>Twitter: <a href="https://x.com/ssboss183032734" className="text-blue-600 underline">@satyendrachaudhary143</a></li>
          <li>GitHub: <a href="https://github.com/satyendrachaudhary143" className="text-blue-600 underline">satyendrachaudhary143</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📝 Feedback</h2>
        {submitted ? (
          <p className="text-green-600">Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts, suggestions, or issues..."
              className="w-full h-32 p-3 border border-gray-300 rounded resize-none"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🌐 Language Support</h2>
        <p className="text-gray-700">We’re working on adding Hindi-English toggle support for better accessibility. Stay tuned!</p>
      </section>
    </div>
  );
};

export default HelpPage;