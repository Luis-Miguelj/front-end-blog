// import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
const createPostSchema = z.object({
  title: z.string().nonempty('Campo de titulo obrigatorio!'),
  postagem: z.string().nonempty('Campo de postagem Obrigatorio'),
})

export function PostPage() {
  // const { mutate } = useMutation(async (data: any) => {
  //   await fetch('https://back-end-blog-sml1.onrender.com/postagem', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  // })

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(createPostSchema),
  })
  const [output, setOutput] = useState('')

  function createPost(data: any) {
    setOutput(JSON.stringify(data))
  }

  return (
    <div>
      <form
        className="flex flex-col gap-3 max-w-xl mx-auto"
        onSubmit={handleSubmit(createPost)}
      >
        <input type="text" {...register('title')} className="text-zinc-950" />
        <textarea
          rows={10}
          cols={30}
          {...register('postagem')}
          className="text-zinc-950"
        />
        <button type="submit">confirm</button>
      </form>
      <pre className="text-zinc-50">{output}</pre>
    </div>
  )
}
