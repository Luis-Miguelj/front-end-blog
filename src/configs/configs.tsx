export function Configs() {
  return (
    <div className="w-full h-full">
      <div className="max-w-6xl mx-auto my-10">
        <div>
          <input
            type="file"
            id="foto"
            className="rounded-md text-xs font-medium p-2 bg-zinc-800 placeholder-zinc-700"
            aria-describedby="file_input_help"
          />
          <h1>Foto de perfil</h1>
        </div>
      </div>
    </div>
  )
}
