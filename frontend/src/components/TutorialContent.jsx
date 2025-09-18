import React from 'react';
import { useParams } from 'react-router-dom';

const TutorialContent = () => {
  const { topic } = useParams();

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-2">📘 {decodeURIComponent(topic)}</h1>
      <p className="text-gray-700">
        This is the content for <strong>{decodeURIComponent(topic)}</strong>. You can customize this section to show Markdown, code, or embedded tutorials.
      </p>
    </div>
  );
};

export default TutorialContent;