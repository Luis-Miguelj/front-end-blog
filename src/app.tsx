import { Postagens } from './components/postagem'
import { Tabs } from './components/tabs/tabs'
import { Loader2 } from 'lucide-react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

export interface PostResponse {
  id: string
  title: string
  postagem: string
}

export function App() {
  const [searchParms] = useSearchParams()

  const search = searchParms.get('search')
    ? String(searchParms.get('search'))
    : ''

  const { data: postsResponse, isLoading } = useQuery<PostResponse[]>({
    queryKey: ['get-posts', search],
    queryFn: async () => {
      const response = await fetch(
        `https://back-end-blog-sml1.onrender.com/?search=${search}`,
      )
      const data = await response.json()

      console.log(data)

      return data
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  })

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Loader2 className="animate-spin" size={50} />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="px-10 pt-5 max-w-6xl mx-auto">
        <Tabs />
      </div>
      <main
        className="py-5 px-10 max-w-6xl mx-auto max-h-[450px] max-md:max-h-[550px] rounded-md space-y-5 overflow-y-auto overflow-hidden scroll-smooth"
        id="scroll-posts"
      >
        <div className="flex flex-col ">
          <div className="space-y-16">
            {postsResponse?.map((items) => (
              <div key={items.id} className="space-y-8 overflow-hidden">
                <Postagens
                  id={items.id}
                  title={items.title}
                  postagem={items.postagem}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
