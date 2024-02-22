import { Header } from './components/header'
import { Postagens } from './components/postagem'
import { Tabs } from './components/tabs/tabs'
// import { Api } from './api/api'
import { useQuery } from '@tanstack/react-query'

export interface PostResponse {
  id: string
  title: string
  postagem: string
}

export function App() {
  // const { api } = Api()

  const { data: postsResponse, isLoading } = useQuery<PostResponse[]>({
    queryKey: ['get-posts'],
    queryFn: async () => {
      const response = await fetch(
        'https://back-end-blog-sml1.onrender.com/?search=',
      )
      const data = await response.json()

      console.log(data)

      return data
    },
  })

  if (isLoading) {
    return null
  }

  return (
    <div className="space-y-5">
      <div className="space-y-5">
        <Header />
      </div>
      <div className="px-10 max-w-6xl mx-auto">
        <Tabs />
      </div>
      <main
        className="py-10 px-10 max-w-6xl mx-auto max-h-[450px] rounded-md space-y-5 overflow-y-scroll overflow-hidden scroll-smooth"
        id="scroll-posts"
      >
        <div className="flex flex-col ">
          <div className="space-y-16">
            {postsResponse?.map((items) => (
              <div key={items.id} className="space-y-8 overflow-hidden">
                <Postagens title={items.title} postagem={items.postagem} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
