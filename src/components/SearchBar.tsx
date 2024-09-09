export default function SearchBar() {
  return (
    <div className="flex-grow mx-8">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
    </div>
  );
}
