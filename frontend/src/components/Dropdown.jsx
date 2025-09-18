export default function Dropdown({ label, options, onAdd }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <select className="flex-1 border-2 border-gray-100 rounded-xl outline-0 px-3 py-2 focus:ring-1 focus:ring-blue-500
             focus-visible:border-blue-500 transition duration-150">
        <option className="outline-0 border-0" value="">{`Select a ${label.toLowerCase()}`}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt} >{opt}</option>
        ))}
      </select>
      <button onClick={onAdd} className="px-2 py-1 bg-blue-500 text-white rounded w-12 h-10">+</button>
    </div>
  );
}