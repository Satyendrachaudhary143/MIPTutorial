import { useState } from 'react';
import { Edit, Calendar, Copy, Check } from 'lucide-react';

export default function ContentRenderer({ content, topic, subject, onEdit }) {
  const [copiedSections, setCopiedSections] = useState(new Set());

  const copyToClipboard = async (text, sectionId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSections(prev => new Set([...prev, sectionId]));

      setTimeout(() => {
        setCopiedSections(prev => {
          const newSet = new Set(prev);
          newSet.delete(sectionId);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      alert('Failed to copy to clipboard');
    }
  };

  const processContentWithCopySections = (htmlContent) => {
    if (!content.copySections || content.copySections.length === 0) {
      return htmlContent;
    }

    let processedContent = htmlContent;

    content.copySections.forEach((section) => {
      const copyId = `copy-${section.id}`;
      const escapedText = section.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedText})`, 'gi');
      const replacement = `<span class="copyable-content" data-copy-id="${copyId}" data-copy-text="${section.text}">$1</span>`;
      processedContent = processedContent.replace(regex, replacement);
    });

    return processedContent;
  };

  const processedContent = processContentWithCopySections(content.content);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">
          <span>{subject.title}</span>
          <span className="mx-2">›</span>
          <span>{topic.title}</span>
        </nav>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
          {onEdit && (
            <button
              onClick={onEdit}
              className="inline-flex items-center px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 text-gray-700"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </button>
          )}
        </div>

        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Last updated: {content.updatedAt.toLocaleDateString()}</span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div
          className="prose prose-lg max-w-none copyable-content-container"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />

        {content.copySections && content.copySections.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Copy Sections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {content.copySections.map((section) => (
                <div
                  key={section.id}
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <span className="text-sm text-gray-700 flex-1 truncate mr-3">
                    {section.text.length > 50 ? `${section.text.substring(0, 50)}...` : section.text}
                  </span>
                  <button
                    onClick={() => copyToClipboard(section.text, section.id)}
                    className="inline-flex items-center px-2.5 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100 text-gray-700 flex-shrink-0"
                  >
                    {copiedSections.has(section.id) ? (
                      <>
                        <Check className="h-3 w-3 mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .copyable-content-container :global(.copyable-content) {
          background: rgba(59, 130, 246, 0.1);
          backdrop-filter: blur(0.5px);
          border-radius: 4px;
          padding: 2px 4px;
          margin: 0 1px;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .copyable-content-container :global(.copyable-content:hover) {
          background: rgba(59, 130, 246, 0.2);
          backdrop-filter: blur(1px);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
        }

        .copyable-content-container :global(.copyable-content::after) {
          content: '📋';
          position: absolute;
          top: -8px;
          right: -8px;
          font-size: 10px;
          opacity: 0;
          transition: opacity 0.2s ease;
          background: white;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .copyable-content-container :global(.copyable-content:hover::after) {
          opacity: 1;
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const copyableElements = document.querySelectorAll('.copyable-content');
              copyableElements.forEach(element => {
                element.addEventListener('click', function() {
                  const textToCopy = this.getAttribute('data-copy-text');
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                      this.style.background = 'rgba(34, 197, 94, 0.2)';
                      this.style.borderColor = 'rgba(34, 197, 94, 0.4)';
                      setTimeout(() => {
                        this.style.background = 'rgba(59, 130, 246, 0.1)';
                        this.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                      }, 1000);
                    });
                  }
                });
              });
            });
          `,
        }}
      />
    </div>
  );
}