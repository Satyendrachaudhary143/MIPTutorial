import Dropdown from "../components/Dropdown";
import Editor from "../components/Editor";
import TextInput from "../components/TextInput";


export default function TutorialForm() {
  return (
    <div className="max-w-6xl mx-auto mt-20 p-6 bg-white shadow-2xl rounded ">
      <h2 className="text-2xl font-bold mb-6">Create New Tutorial</h2>
      <Dropdown label="Subject" options={['Math', 'Science']} onAdd={() => {}} />
      <Dropdown label="Topic" options={['Algebra', 'Biology']} onAdd={() => {}} />
      <TextInput label="Content Title" placeholder="Enter content title" />
      <Editor />
      <div className="flex items-center justify-center">
        
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition hover:cursor-pointer">Submit Tutorial</button>
      </div>
    </div>
  );
}
