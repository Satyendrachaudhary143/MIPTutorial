import { useState } from 'react';
import SubjectCard from '../components/SubjectCard';
import { defaultData } from '../lib/tutorialDataManager';
import { Link } from 'react-router';

// const dummyData = [
//   {
//     id: 1,
//     name: 'Programming C',
//     topics: [
//       {
//         id: 101,
//         name: 'Basic Syntax',
//         subtopics: [
//           { id: 1001, name: 'Variables and Data Types', created: '11/19/2023' },
//         ],
//       },
//       {
//         id: 102,
//         name: 'Control Structures',
//         subtopics: [
//           { id: 1002, name: 'If-Else Statements', created: '11/19/2023' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Math',
//     topics: [
//       {
//         id: 201,
//         name: 'Algebra',
//         subtopics: [
//           { id: 2001, name: 'Linear Equations', created: '11/19/2023' },
//         ],
//       },
//     ],
//   },
// ];


export default function AdminPanel() {
  const [data] = useState(defaultData);
  const handleDeleteSubject = (id) => {
    console.log('Delete subject with ID:', id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">

        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        <p className='text-gray-800'>Manage all subjects, topics, and tutorial content</p>
        </div>
        <div className="">
          <Link to="create-tutorial">
            
          <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:cursor-pointer hover:bg-blue-700">Create Now</button>
          </Link>
        </div>
      </div>
      {data.subjects.map(subject => (
        <SubjectCard key={subject.id} subject={subject} onDelete={handleDeleteSubject} />
      ))}
    </div>
  );
}
