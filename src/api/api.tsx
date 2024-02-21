import axios from 'axios'
import { useEffect, useState } from 'react'

interface ApiProps {
  id: string
  title: string
  postagem: string
}

export function Api() {
  const [api, setApi] = useState<ApiProps[]>()

  useEffect(() => {
    axios.get('https://back-end-blog-sml1.onrender.com').then((response) => {
      console.log(response.data)
      setApi(response.data)
    })
  }, [])

  return { api }
}
