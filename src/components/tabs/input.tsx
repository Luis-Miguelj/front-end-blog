import { Search } from 'lucide-react'
import { useState } from 'react'
// import { Api } from '../../api/api'

export function Input() {
  // const { setSearch } = Api()
  const [pesq, setPesq] = useState<string>('')

  function handlePesq() {
    console.log(pesq)
  }

  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-zinc-50 px-1 flex items-center justify-center h-6 rounded-s-md"
        onClick={handlePesq}
      >
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
        value={pesq}
        onChange={(e) => setPesq(e.target.value)}
      />
    </div>
  )
}
