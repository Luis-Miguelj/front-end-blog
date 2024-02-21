import { Search } from 'lucide-react'

export function Tabs() {
  return (
    <div className="space-y-2 pb-3 border-b-[0.5px] border-zinc-700">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <h1 className="text-xl font-medium">Postagens</h1>
          <button className="text-xs font-medium p-1 bg-zinc-700 rounded hover:bg-zinc-400 transition-all duration-300">
            New Post
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-zinc-50 px-1 flex items-center justify-center h-6 rounded-s-md">
            <Search
              size={15}
              className="bg-zinc-50 flex justify-center items-center rounded-md"
              color="#000"
            />
          </button>
          <input
            type="text"
            className="w-32 h-6 bg-zinc-50 rounded-e-md text-zinc-950 text-xs font-medium px-1.5 outline-none placeholder:text-zinc-950 placeholder:text-xs placeholder:font-medium "
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  )
}
