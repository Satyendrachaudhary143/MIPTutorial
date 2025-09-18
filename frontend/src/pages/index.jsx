import { useState } from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import ContentRenderer from '../components/ContentRenderer';
import { BookOpen } from 'lucide-react';

export default function Index() {
  const [selectedContent, setSelectedContent] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleContentSelect = (content, topic, subject) => {
    setSelectedContent({ content, topic, subject });
  };

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    setSelectedContent(null);
  };

  return (
    <Layout
      showSidebar={true}
      sidebar={
        <Sidebar
          key={refreshKey}
          onContentSelect={handleContentSelect}
          selectedContentId={selectedContent?.content?.id}
          onRefresh={handleRefresh}
        />
      }
    >
      <div className="h-full">
        {selectedContent ? (
          <ContentRenderer
            content={selectedContent.content}
            topic={selectedContent.topic}
            subject={selectedContent.subject}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto" />
              <h2 className="text-2xl font-semibold text-gray-600">Welcome to Tutorial Maker</h2>
              <p className="text-gray-500 max-w-md">
                Select a tutorial from the sidebar to start reading, or create a new tutorial using the "Create Tutorial" button.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}