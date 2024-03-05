import { CircleUserRound } from 'lucide-react'
import { User } from '../user/user'
import { useEffect, useState } from 'react'

export function Header() {
  // console.log(pathname.toString())

  const width = window.innerWidth
  const [cargo, setCargo] = useState('')
  const [user, setUser] = useState({
    // username: '',
    // email: '',
  })

  console.log(width)
  const [showOrClose, setShowOrClose] = useState<boolean>()

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('dados')
    const dados = JSON.parse(userLocalStorage as string)

    // console.log(dados)
    if (dados !== '') {
      setUser(dados)
    } else {
      alert('erro')
    }
  }, [])

  console.log(user)

  function handleModal(validate: boolean) {
    if (!validate) {
      setShowOrClose(true)
    } else {
      setShowOrClose(false)
    }
  }

  return (
    <header className="flex flex-col justify-center px-10 h-[8.5rem] border-b-[0.5px] border-zinc-700 overflow-hidden max-sm:text-[10px]">
      <div className="flex pt-10 justify-between items-center h-1/2 text-base overflow-hidden">
        <div className="flex items-center text-zinc-50 text-xs font-medium gap-5">
          <img src="./logo.svg" alt="logo" className="w-20 h-14 object-cover" />
          <div className="flex gap-3">
            <p className="text-zinc-600 font-semibold">/</p>
            <a href="/">Início</a>
            <p className="text-zinc-600 font-semibold">/</p>
            <h1>Cargo: {cargo}</h1>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center h-64 overflow-hidden">
          <a className="text-xs font-medium">Usuario: {user.username}</a>
          <button className="" onClick={() => handleModal(false)}>
            <CircleUserRound size={32} />
          </button>
          {showOrClose === true ? (
            <div className="absolute right-0 top-0 flex justify-center items-center w-full h-screen bg-zinc-800 bg-opacity-55">
              <User handleModal={handleModal} />
            </div>
          ) : (
            ''
          )}
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
