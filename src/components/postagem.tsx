interface PostagensProps {
  title: string
  postagem: string
}

export function Postagens({ title, postagem }: PostagensProps) {
  return (
    <div className="flex justify-between py-3 border-b-[1px] border-zinc-700">
      <div className="flex flex-col space-y-3 max-w-xl break-words">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-sm">{postagem}</p>
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
