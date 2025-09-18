import SubtopicItem from './SubtopicItem';
import { MdOutlineDateRange } from "react-icons/md";

export default function TopicItem({ topic }) {
  return (
    <>
      <div className='flex flex-col  border-1 border-gray-300 p-2 '>

      <h3 className="text-lg font-medium text-blue-700 p-0">{topic.title}</h3>
      <p className='flex  items-center gap-0.5'><MdOutlineDateRange/>Created :{topic.createdAt.toLocaleString() }</p>
      </div>
    <div className="ml-4 mb-4 border-0.5 shadow border-gray-800 p-2 rounded-xl bg-white">
      {topic.contents.map(sub => (
        <SubtopicItem key={sub.id} subtopic={sub} />
      ))}
    </div>
        </>
  );
}