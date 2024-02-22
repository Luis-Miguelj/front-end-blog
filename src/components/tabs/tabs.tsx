import { Input } from './input'

export function Tabs() {
  return (
    <div className="max-w-6xl mx-auto space-y-2 py-5 border-b-[0.5px] border-zinc-700">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <h1 className="text-xl font-medium">Postagens</h1>
          <button className="text-xs font-medium p-1 bg-zinc-700 rounded hover:bg-zinc-400 transition-all duration-300">
            New Post
          </button>
        </div>
        <Input />
      </div>
    </div>
  )
}
