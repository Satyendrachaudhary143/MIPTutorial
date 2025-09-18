export default function Toolbar() {
  return (
    <div className="flex items-center gap-2  pb-2 mb-2">
      <button className="font-bold px-2 py-1 border rounded">B</button>
      <button className="italic px-2 py-1 border rounded">I</button>
      <span className="ml-4">Text Size:</span>
      <select className="border rounded px-2 py-1">
        <option>14px</option>
        <option>16px</option>
        <option>18px</option>
      </select>
      <button className="ml-auto px-3 py-1 bg-green-500 text-white rounded">Copy Maker</button>
      <button className="px-3 py-1 bg-purple-500 text-white rounded">Preview</button>
    </div>
  );
}