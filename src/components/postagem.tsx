interface PostagensProps {
  title: string
  postagem: string
}

export function Postagens({ title, postagem }: PostagensProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{postagem}</p>
    </div>
  )
}
