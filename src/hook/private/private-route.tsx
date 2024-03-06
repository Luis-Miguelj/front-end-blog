import { redirect, useLocation } from 'react-router-dom'
export function PrivateRoute() {
  const location = useLocation()
  console.log(location.pathname)

  const storage = localStorage.getItem('dados')

  function Private(caminho: string) {
    if (location.pathname !== caminho && !storage) {
      redirect(caminho)
    }
  }

  return { Private }
}
