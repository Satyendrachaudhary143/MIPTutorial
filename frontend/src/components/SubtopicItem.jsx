import { FaEdit } from "react-icons/fa";
import { MdDelete,MdOutlineDateRange } from "react-icons/md";
export default function SubtopicItem({ subtopic }) {
  return (
    <div className="ml-6 p-2   mb-2">
      <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow">
        <div>
          <p className="text-gray-700 font-semibold">{subtopic.title}</p>
          <p className="text-sm text-gray-500 flex justify-center items-center gap-0.5"><MdOutlineDateRange/>Updated: {subtopic.updatedAt.toLocaleString()}</p>
        </div>
        <div className="space-x-2">
          <button className="text-green-600 hover:underline text-2xl"><FaEdit/></button>
          <button className="text-red-600 hover:underline text-2xl"><MdDelete /></button>
        </div>
      </div>
    </div>
  );
}