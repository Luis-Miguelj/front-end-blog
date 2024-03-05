import { useEffect, useState } from 'react'
import { Input } from './input'
import { Plus } from 'lucide-react'

interface DadosProps {
  username: string
  email: string
}

export function Tabs() {
  const [user, setUser] = useState('')

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('dados')

    if (userLocalStorage) {
      const dados: DadosProps = JSON.parse(userLocalStorage!)

      if (dados.email === 'luismigueljacobus01@gmail.com') {
        console.log('passou')
      } else {
        console.log('n consta')
      }

      if (dados.email) {
        setUser(dados.email)
      }
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto space-y-2 py-5 border-b-[0.5px] border-zinc-700">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <h1 className="text-xl font-medium">Postagens</h1>
          {user === 'luismigueljacobus01@gmail.com' ? (
            <div className="text-xs font-medium p-1 bg-zinc-700 rounded hover:bg-zinc-400 transition-all duration-300">
              <a href="/postagens" className="max-sm:hidden">
                New Post
              </a>
              <a
                href="/postagens"
                className="font-medium hidden max-sm:flex items-center"
              >
                <Plus size={14} />
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
        <Input />
      </div>
    </div>
  )
}
