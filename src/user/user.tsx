import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

interface ModalProps {
  handleModal: (validate: boolean) => void
}

interface UserProps {
  username: string
  email: string
}

const createUserSchema = z.object({
  username: z
    .string({
      required_error: 'Esse campo deve ser preenchido',
    })
    .min(1, {
      message: 'esse campo deve conter pelo menos um caractere.',
    }),
  email: z
    .string({
      required_error: 'Esse campo deve ser preenchido',
    })
    .email({
      message: 'esse campo deve ser um email',
    }),
})

type CreateUserFormData = z.infer<typeof createUserSchema>

export function User({ handleModal }: ModalProps) {
  const [output, setOutput] = useState<string>()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  })

  function createUser(data: UserProps) {
    setOutput(JSON.stringify(data))
    localStorage.setItem('dados', JSON.stringify(data))

    handleModal(true)
    reset()
    window.location.reload()
  }

  console.log(output)

  return (
    <div className="flex flex-col w-96 h-96 bg-zinc-50 text-zinc-950 rounded-lg shadow-2xl">
      <div className="container flex justify-end items-center h-12 px-5">
        <button
          onClick={() => handleModal(true)}
          className="font-medium p-1 bg-zinc-800 text-zinc-50 rounded-md shadow hover:bg-zinc-700 transition-all duration-300"
        >
          <X size={18} />
        </button>
      </div>
      <div className="container flex flex-col items-center space-y-8 justify-center w-full h-52">
        <h1 className="font-semibold text-zinc-800 text-lg">Cadastrar-se</h1>
        <form
          onSubmit={handleSubmit(createUser)}
          className="flex flex-col items-center w-full space-y-5"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium">Nome:</span>
            <input
              type="text"
              {...register('username')}
              className="px-2 py-1 rounded shadow placeholder:text-xs placeholder:font-medium outline-zinc-700"
              placeholder="Nome de Usuário"
            />
            {errors.username && (
              <span className="text-xs font-medium">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium">Email:</span>
            <input
              type="text"
              {...register('email')}
              className="px-2 py-1 rounded shadow placeholder:text-xs placeholder:font-medium outline-zinc-700"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-xs font-medium">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="text-xs font-medium p-1.5 bg-zinc-800 text-zinc-50 rounded-md shadow hover:bg-zinc-700 transition-all duration-300"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
