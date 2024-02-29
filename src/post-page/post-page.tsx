import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

// interface PostPageProps {
//   title: string
//   postagens: string
// }

const createPostSchema = z.object({
  title: z
    .string({
      required_error: 'Campo de titulo obrigatorio!',
    })
    .min(3, {
      message: 'O titulo precisa de no minimo 3 letras.',
    }),
  postagem: z
    .string({
      required_error: 'Campo de postagem Obrigatorio',
    })
    .min(3, {
      message: 'A postagem precisa de no minimo 3 letras.',
    }),
})

type CreatePostFormData = z.infer<typeof createPostSchema>

export function PostPage() {
  const mutation = useMutation({
    mutationFn: async (post: any) => {
      const response = await fetch(
        'https://back-end-blog-sml1.onrender.com/postagens',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post),
        },
      )

      const data = response.json()
      console.log(data)

      return data
    },
    onSuccess: (data) => {
      console.log({ data })
    },
    mutationKey: ['get-posts'],
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
  })

  const [output, setOutput] = useState('')

  function createPost(data: any) {
    mutation.mutate(data)
    setOutput(JSON.stringify(data))
  }

  return (
    <div className="space-y-5">
      <main>
        <form
          className="max-h-96 flex flex-col gap-3 max-w-3xl mx-auto px-32 py-10 space-y-3"
          onSubmit={handleSubmit(createPost)}
        >
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Informe o Título:</span>
            <input
              type="text"
              {...register('title')}
              className="py-2 px-2 rounded-sm bg-zinc-900 border-2 border-zinc-800 text-zinc-200 placeholder:text-zinc-400"
              placeholder="Título..."
            />
            {errors.title && (
              <span className="text-xs font-medium">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">
              Informe o conteúdo da Postagem:
            </span>

            <textarea
              rows={10}
              cols={30}
              {...register('postagem')}
              className="py-2 px-2 rounded-sm bg-zinc-900 border-2 border-zinc-800 text-zinc-200 placeholder:text-zinc-400"
              placeholder="Postagem..."
            />
            {errors.postagem && (
              <span className="text-xs font-medium">
                {errors.postagem.message}
              </span>
            )}
          </div>
          <div className="group bg-zinc-50 py-1 px-1 text-zinc-950 flex flex-col transition-all duration-300 rounded-sm cursor-pointer">
            <button
              type="submit"
              className="transition-all duration-300 w-full overflow-hidden rounded-sm font-medium pt-1"
            >
              Postar
            </button>
            <div className="w-0 rounded-sm bg-transparent p-[2px] transition-all duration-500 group-hover:w-full group-hover:bg-zinc-900"></div>
          </div>
        </form>
      </main>
      <pre className="text-zinc-50">{output}</pre>
    </div>
  )
}
