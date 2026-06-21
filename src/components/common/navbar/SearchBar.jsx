import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center border bg-white md:bg-gray-100  py-2 px-3 rounded-4xl md:rounded-md border-gray-200 md:border-gray-100 w-[calc(100% - 16px)] md:w-1/3 mx-2 md:mx-0 my-4 md:my-0 shadow-lg md:shadow-none">
      <Search className="text-gray-400 w-5 h-5" />
      <input
        className="text-gray-800 ml-4 outline-0 text-sm md:text-lg w-full"
        type="search"
        name="search"
        placeholder="Search for fashion"
      />
    </div>
  );
}
