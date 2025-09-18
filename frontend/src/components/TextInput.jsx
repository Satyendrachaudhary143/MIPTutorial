export default function TextInput({ label, placeholder }) {
  return (
    <div className="mb-4 ">
      <label className="block font-medium mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2 outline-0 border-gray-100 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}