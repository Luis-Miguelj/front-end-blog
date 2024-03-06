import { CircleUserRound } from 'lucide-react'
import { User } from '../user/user'
import { useEffect, useState } from 'react'
import { Menu } from './menu/menu'

interface DadosProps {
  username: string
  email: string
}

export function Header() {
  // console.log(pathname.toString())

  // const width = window.innerWidth
  const [cargo, setCargo] = useState('')
  const [user, setUser] = useState<string>('')
  const [w, setW] = useState(false)
  const [tamanho, setTamanho] = useState(false)

  const [showOrClose, setShowOrClose] = useState<boolean>()

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('dados')

    if (userLocalStorage) {
      const dados: DadosProps = JSON.parse(userLocalStorage!)

      if (dados.email === 'luismigueljacobus01@gmail.com') {
        console.log('passou')
        setCargo('Adm')
      } else {
        console.log('n consta')
        setCargo('Visitante')
      }

      if (dados.username) {
        setUser(dados.username)
      }
    }
  }, [])

  function handleModal(validate: boolean) {
    if (!validate) {
      setShowOrClose(true)
    } else {
      setShowOrClose(false)
    }
  }
  function responsiveMenu() {
    if (window.innerWidth <= 1080) {
      setTamanho(true)
    } else {
      setTamanho(false)
    }
  }
  function openOrCloseMenu(validate: boolean) {
    if (!validate) {
      setW(true)
    } else {
      setW(false)
    }
  }

  window.addEventListener('resize', responsiveMenu)

  return (
    <header className="flex flex-col justify-center px-10 h-[8.5rem] border-b-[0.5px] border-zinc-700 overflow-hidden max-sm:text-[10px]">
      <div className="flex pt-10 justify-between items-center h-1/2 text-base overflow-hidden">
        <div className="flex items-center text-zinc-50 text-xs font-medium gap-5">
          <img src="./logo.svg" alt="logo" className="w-20 h-14 object-cover" />
          <div className="flex gap-3">
            <p className="text-zinc-600 font-semibold">/</p>
            <a href="/">Início</a>
            <p className="text-zinc-600 font-semibold">/</p>
            {tamanho === true ? '' : <h1>Cargo: {cargo}</h1>}
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center h-64 overflow-hidden">
          {tamanho === true ? (
            ''
          ) : (
            <a className="text-xs font-medium">Usuário: {user}</a>
          )}
          {user ? (
            <div>
              <button
                onClick={() => {
                  if (tamanho === true) {
                    openOrCloseMenu(false)
                  }
                }}
              >
                <CircleUserRound size={32} />
              </button>
              {tamanho === true ? (
                <Menu
                  usuario={user}
                  cargo={cargo}
                  width={w}
                  openOrCloseMenu={openOrCloseMenu}
                />
              ) : (
                ''
              )}
            </div>
          ) : (
            <button className="" onClick={() => handleModal(false)}>
              <CircleUserRound size={32} />
            </button>
          )}
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
        <a
          href="/configurações"
          className="p-2 rounded-md hover:bg-zinc-800 transition-all duration-300"
        >
          Configurações
        </a>
        <button className="p-2 rounded-md hover:bg-zinc-800 transition-all duration-300">
          Contato
        </button>
      </div>
    </header>
  )
}
