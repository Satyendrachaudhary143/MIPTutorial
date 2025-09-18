import Toolbar from "./ToolBar";

export default function Editor() {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-1">Content Editor</label>
      <Toolbar />
          <textarea
              
        rows="10"
        placeholder="Enter your tutorial content here. Use **bold** and *italic* formatting."
        className="w-full border rounded px-3 py-2 border-gray-100 outline-0 focus:ring-1 focus:ring-blue-500 resize-none"
      />
    </div>
  );
}