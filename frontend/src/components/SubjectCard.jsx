import TopicItem from './TopicItem';
import { MdOutlineDateRange,MdDelete } from "react-icons/md";

export default function SubjectCard({ subject, onDelete }) {
  return (
    <>
    <div className="border-2 border-gray-300 shadow-xl rounded-lg  mb-6 bg-white hover:shadow-blue-500/50">
      <div className="flex justify-between items-center p-2 bg-blue-50 rounded-t-xl rounded-l-xl">
        <div>

          <h2 className="text-xl font-bold   text-blue-900">{subject.title}</h2>
          <p className='flex items-center gap-0.5'><MdOutlineDateRange/> Created : {subject.createdAt.toLocaleString()} </p>
        </div>
        {/* <button onClick={() => onDelete(subject.id)} className="text-red-600 hover:text-red-800 text-2xl">
          <MdDelete/>
        </button> */}
      </div>
      {subject.topics.map(topic => (
        <TopicItem key={topic.id} topic={topic} />
      ))}
    </div>
      </>
  );
}