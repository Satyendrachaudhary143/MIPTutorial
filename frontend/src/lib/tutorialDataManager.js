// const STORAGE_KEY = 'tutorial_maker_data';

export const defaultData = {
  subjects: [
    {
      id: '1',
      title: 'Programming C',
      createdAt: new Date(),
      topics: [
        {
          id: '1-1',
          title: 'Basic Syntax',
          createdAt: new Date(),
          contents: [
            {
              id: '1-1-1',
              title: 'Variables and Data Types',
              content: `<h2 style="color:#006400; background:#e6ffe6; padding:10px; border-radius:5px;">
  🔸 Variable in C
</h2>
<p style="font-family:Arial; font-size:16px; color:#333;">
  Variable ek container hota hai jo kisi value ko store karta hai. Example:<br>
  <code style="background:#f0f0f0; padding:4px 8px; border-radius:4px;">int age = 25;</code><br>
  Yahaan <strong>age</strong> ek variable hai jo integer value 25 ko store karta hai.
</p>

<h2 style="color:#8b0000; background:#fff0e6; padding:10px; border-radius:5px;">
  🔹 Data Types in C
</h2>
<p style="font-family:Arial; font-size:16px; color:#333;">
  Data type batata hai ki variable kis type ka data store karega. Common types:
</p>
<ul style="font-size:16px; line-height:1.6;">
  <li><strong>int</strong> – Integer values (e.g., 10, -5)</li>
  <li><strong>float</strong> – Decimal values (e.g., 3.14, -0.99)</li>
  <li><strong>char</strong> – Single character (e.g., 'A', 'z')</li>
</ul>`,
              createdAt: new Date(),
              updatedAt: new Date(),
              copySections: []
            }
          ]
        },
        {
          id: '1-2',
          title: 'Control Structures',
          createdAt: new Date(),
          contents: [
            {
              id: '1-2-1',
              title: 'If-Else Statements',
              content: '<h3>Conditional Statements</h3><p>Use <strong>if-else</strong>...</p>',
              createdAt: new Date(),
              updatedAt: new Date(),
              copySections: []
            },
             {
              id: '1-2-2',
              title: 'If-Else Statements',
              content: '<h3>Conditional Statements</h3><p>Use <strong>if-else</strong>...</p>',
              createdAt: new Date(),
              updatedAt: new Date(),
              copySections: []
            }
          ]
        }
      ]
    },
    {
      id: '2',
      title: 'Math',
      createdAt: new Date(),
      topics: [
        {
          id: '2-1',
          title: 'Algebra',
          createdAt: new Date(),
          contents: [
            {
              id: '2-1-1',
              title: 'Linear Equations',
              content: '<h3>Linear Equations</h3><p>A linear equation...</p>',
              createdAt: new Date(),
              updatedAt: new Date(),
              copySections: []
            }
          ]
        }
      ]
    }
  ]
};

// 🔄 Utility to revive Date objects
// const reviveDates = (data) => {
//   data.subjects.forEach(subject => {
//     subject.createdAt = new Date(subject.createdAt);
//     subject.topics.forEach(topic => {
//       topic.createdAt = new Date(topic.createdAt);
//       topic.contents.forEach(content => {
//         content.createdAt = new Date(content.createdAt);
//         content.updatedAt = new Date(content.updatedAt);
//         if (!content.copySections) content.copySections = [];
//       });
//     });
//   });
//   return data;
// };

// // 🧠 Functional Manager
// export const tutorialDataManager = {
//   getData: () => {
//     const stored = localStorage.getItem(STORAGE_KEY);
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       return reviveDates(parsed);
//     }
//     return defaultData;
//   },

//   saveData: (data) => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//   },

//   addSubject: (title) => {
//     const data = tutorialDataManager.getData();
//     const newSubject = {
//       id: Date.now().toString(),
//       title,
//       topics: [],
//       createdAt: new Date()
//     };
//     data.subjects.push(newSubject);
//     tutorialDataManager.saveData(data);
//     return newSubject;
//   },

//   addTopic: (subjectId, title) => {
//     const data = tutorialDataManager.getData();
//     const subject = data.subjects.find(s => s.id === subjectId);
//     if (!subject) throw new Error('Subject not found');

//     const newTopic = {
//       id: `${subjectId}-${Date.now()}`,
//       title,
//       contents: [],
//       createdAt: new Date()
//     };
//     subject.topics.push(newTopic);
//     tutorialDataManager.saveData(data);
//     return newTopic;
//   },

//   addContent: (subjectId, topicId, title, content, copySections = []) => {
//     const data = tutorialDataManager.getData();
//     const subject = data.subjects.find(s => s.id === subjectId);
//     if (!subject) throw new Error('Subject not found');

//     const topic = subject.topics.find(t => t.id === topicId);
//     if (!topic) throw new Error('Topic not found');

//     const newContent = {
//       id: `${topicId}-${Date.now()}`,
//       title,
//       content,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       copySections
//     };
//     topic.contents.push(newContent);
//     tutorialDataManager.saveData(data);
//     return newContent;
//   },

//   updateContent: (contentId, title, content, copySections = []) => {
//     const data = tutorialDataManager.getData();
//     for (const subject of data.subjects) {
//       for (const topic of subject.topics) {
//         const contentItem = topic.contents.find(c => c.id === contentId);
//         if (contentItem) {
//           contentItem.title = title;
//           contentItem.content = content;
//           contentItem.copySections = copySections;
//           contentItem.updatedAt = new Date();
//           tutorialDataManager.saveData(data);
//           return;
//         }
//       }
//     }
//     throw new Error('Content not found');
//   },

//   deleteContent: (contentId) => {
//     const data = tutorialDataManager.getData();
//     for (const subject of data.subjects) {
//       for (const topic of subject.topics) {
//         const index = topic.contents.findIndex(c => c.id === contentId);
//         if (index !== -1) {
//           topic.contents.splice(index, 1);
//           tutorialDataManager.saveData(data);
//           return;
//         }
//       }
//     }
//     throw new Error('Content not found');
//   },

//   deleteTopic: (topicId) => {
//     const data = tutorialDataManager.getData();
//     for (const subject of data.subjects) {
//       const index = subject.topics.findIndex(t => t.id === topicId);
//       if (index !== -1) {
//         subject.topics.splice(index, 1);
//         tutorialDataManager.saveData(data);
//         return;
//       }
//     }
//     throw new Error('Topic not found');
//   },

//   deleteSubject: (subjectId) => {
//     const data = tutorialDataManager.getData();
//     const index = data.subjects.findIndex(s => s.id === subjectId);
//     if (index !== -1) {
//       data.subjects.splice(index, 1);
//       tutorialDataManager.saveData(data);
//       return;
//     }
//     throw new Error('Subject not found');
//   }
// };