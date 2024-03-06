import { X } from 'lucide-react'
interface MenuProps {
  usuario: string
  cargo: string
  width: boolean
  openOrCloseMenu: (validate: boolean) => void
}
export function Menu({ usuario, cargo, width, openOrCloseMenu }: MenuProps) {
  // const [tamanho, setTamanho]

  return (
    <div
      className={`absolute top-0 right-0 bg-zinc-800 rounded-l-lg ${width === true ? 'w-60' : 'w-0'}  h-60 overflow-hidden transition-all duration-300`}
    >
      <div className="container flex flex-col">
        <div className="container flex justify-end items-center h-10 px-5 py-5 text-xs font-medium">
          <button onClick={() => openOrCloseMenu(true)}>
            <X
              size={20}
              className="rounded hover:bg-zinc-600 transition-all duration-300"
            />
          </button>
        </div>
        <div className="py-5 flex flex-col container items-start px-5 text-xs font-medium gap-2">
          <label>Usuário: {usuario}</label>
          <label>Cargo: {cargo}</label>
        </div>
      </div>
    </div>
  )
}
