import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
interface PostagensProps {
  id?: string
  title?: string
  postagem?: string
}

interface DadosProps {
  username: string
  email: string
}

export function Postagens({ title, postagem, id }: PostagensProps) {
  const client = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (postId) => {
      await fetch(`https://back-end-blog-sml1.onrender.com/${postId}`, {
        method: 'DELETE',
      })
    },
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ['get-posts'],
        // refetchType: 'active',
      })
    },
    // mutationKey: ['get-posts'],
  })

  function handleDeletePost(id: string) {
    mutation.mutate(id)
  }

  const [user, setUser] = useState('')

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('dados')

    if (userLocalStorage) {
      const dados: DadosProps = JSON.parse(userLocalStorage!)

      if (dados.email === 'luismigueljacobus01@gmail.com') {
        console.log('passou page: postagens_component')
      } else {
        console.log('n consta')
      }

      if (dados.email) {
        setUser(dados.email)
      }
    }
  }, [])

  return (
    <div className="flex justify-between max-md:flex-col py-3 border-b-[1px] border-zinc-700">
      <div className="flex flex-col space-y-3 max-w-xl break-words">
        <div className="flex flex-col space-y-3 max-w-xl break-words h-2/3">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-sm">{postagem}</p>
        </div>
        <div className="h-1/3 flex justify-start max-md:justify-end max-md:py-5 items-end">
          {user === 'luismigueljacobus01@gmail.com' ? (
            <button
              className="text-xs font-medium p-1 bg-zinc-700 hover:bg-zinc-400 transition-all duration-300 rounded"
              onClick={() => handleDeletePost(id!)}
            >
              Excluir
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="">
        <div
          className="w-96 bg-zinc-50 h-96 overflow-hidden rounded-md"
          id="foto"
        >
          <img
            src="./fundo.jpg"
            alt="img"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
