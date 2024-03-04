import { CircleUserRound } from 'lucide-react'

export function Header() {
  // console.log(pathname.toString())

  const width = window.innerWidth

  console.log(width)

  return (
    <header className="flex flex-col justify-center px-10 h-[8.5rem] border-b-[0.5px] border-zinc-700 overflow-hidden">
      <div className="flex pt-10 justify-between items-center h-1/2 text-base overflow-hidden">
        <div className="flex items-center text-zinc-50 text-xs font-medium gap-5">
          <img src="./logo.svg" alt="logo" className="w-20 h-14 object-cover" />
          <div className="flex gap-3">
            <p className="text-zinc-600 font-semibold">/</p>
            <a href="/">Início</a>
            <p className="text-zinc-600 font-semibold">/</p>
            <h1>Cargo: Visitante</h1>
          </div>
        </div>
        <div className="flex items-center justify-center h-64 overflow-hidden">
          <button className="full">
            <CircleUserRound size={32} />
          </button>
        </div>
      </div>
      <div className="flex px-3 items-center max-sm:justify-center gap-3 h-1/2 font-medium text-xs">
        <a
          href="/sobre-mim"
          className="p-2 rounded-md hover:bg-zinc-800 transition-all duration-300"
        >
          Sobre mim
        </a>
        <button className="p-2 rounded-md hover:bg-zinc-800 transition-all duration-300">
          Configurações
        </button>
        <button className="p-2 rounded-md hover:bg-zinc-800 transition-all duration-300">
          Contato
        </button>
      </div>
    </header>
  )
}
