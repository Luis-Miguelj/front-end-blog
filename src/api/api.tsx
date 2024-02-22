import axios from 'axios'
import { useEffect, useState } from 'react'

interface ApiProps {
  id: string
  title: string
  postagem: string
}

export function Api() {
  // const [search, setSearch] = useState<string>('')
  const [api, setApi] = useState<ApiProps[]>()

  // const test = ''

  useEffect(() => {
    // console.log(search)

    axios
      .get(`https://back-end-blog-sml1.onrender.com/?search=`)
      .then((response) => {
        console.log(response.data)
        setApi(response.data)
      })
      .catch((err) => {
        console.log(new Error(err))
      })
  }, [])

  return { api }
}
