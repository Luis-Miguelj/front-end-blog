import { ArrowRight } from 'lucide-react'
interface MenuProps {
  usuario: string
  cargo: string
  width: boolean
  openOrCloseMenu: (validate: boolean) => void
}
export function Menu({ usuario, cargo, width, openOrCloseMenu }: MenuProps) {
  // const [tamanho, setTamanho]
  const localstorage = () => {
    localStorage.removeItem('dados')
    window.location.reload()
  }

  return (
    <div
      className={`absolute top-0 right-0 bg-zinc-900 rounded-l-lg ${width === true ? 'w-60' : 'w-0'}  h-60 overflow-hidden transition-all duration-300`}
    >
      <div className="container flex flex-col">
        <div className="py-5 flex flex-col container items-start px-5 text-xs font-medium gap-2">
          <label className="p-1 rounded hover:bg-zinc-700">
            Usuário: {usuario}
          </label>
          <label className="p-1 rounded hover:bg-zinc-700">
            Cargo: {cargo}
          </label>
          <label className="p-1 rounded hover:bg-zinc-700">
            Status: {usuario ? 'online' : 'offline'}
          </label>
        </div>
        <div className="container flex justify-between items-center h-10 px-5 pb-5 text-xs font-medium absolute bottom-0">
          <button onClick={() => openOrCloseMenu(true)}>
            <ArrowRight
              size={20}
              className="rounded hover:bg-zinc-600 transition-all duration-300"
            />
          </button>
          <button onClick={localstorage} className="p-2 rounded bg-zinc-800">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
