import { useState } from 'react';
import { ChevronDown, ChevronRight, Book, FileText } from 'lucide-react';
import { defaultData } from '../lib/tutorialDataManager'; // JS version

export default function Sidebar({ onContentSelect, selectedContentId }) {
  const [data] = useState(defaultData);
  const [expandedSubjects, setExpandedSubjects] = useState(new Set(['1', '2']));
  const [expandedTopics, setExpandedTopics] = useState(new Set());

  const toggleSubject = (subjectId) => {
    const newExpanded = new Set(expandedSubjects);
    newExpanded.has(subjectId) ? newExpanded.delete(subjectId) : newExpanded.add(subjectId);
    setExpandedSubjects(newExpanded);
  };

  const toggleTopic = (topicId) => {
    const newExpanded = new Set(expandedTopics);
    newExpanded.has(topicId) ? newExpanded.delete(topicId) : newExpanded.add(topicId);
    setExpandedTopics(newExpanded);
  };

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Subjects</h2>

        <div className="space-y-2">
          {data.subjects.map((subject) => (
            <div key={subject.id} className="border border-gray-200 rounded-lg bg-white">
              <div
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSubject(subject.id)}
              >
                <div className="flex items-center space-x-2">
                  {expandedSubjects.has(subject.id) ? (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  )}
                  <Book className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-gray-900">{subject.title}</span>
                </div>
              </div>

              {expandedSubjects.has(subject.id) && (
                <div className="pl-6 pb-2">
                  {subject.topics.map((topic) => (
                    <div key={topic.id} className="mb-2">
                      <div
                        className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 rounded"
                        onClick={() => toggleTopic(topic.id)}
                      >
                        <div className="flex items-center space-x-2">
                          {expandedTopics.has(topic.id) ? (
                            <ChevronDown className="h-3 w-3 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-3 w-3 text-gray-500" />
                          )}
                          <span className="text-sm font-medium text-gray-700">{topic.title}</span>
                        </div>
                      </div>

                      {expandedTopics.has(topic.id) && (
                        <div className="pl-5 space-y-1">
                          {topic.contents.map((content) => (
                            <div
                              key={content.id}
                              className={`flex items-center p-2 cursor-pointer rounded text-sm ${
                                selectedContentId === content.id
                                  ? 'bg-blue-100 text-blue-900'
                                  : 'hover:bg-gray-100 text-gray-600'
                              }`}
                              onClick={() => onContentSelect(content, topic, subject)}
                            >
                              <div className="flex items-center space-x-2">
                                <FileText className="h-3 w-3" />
                                <span>{content.title}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}