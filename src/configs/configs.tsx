export function Configs() {
  const localstorage = () => {
    localStorage.removeItem('dados')
    window.location.reload()
  }

  return (
    <div>
      <button onClick={localstorage}>Logout</button>
    </div>
  )
}
