import { Header } from './components/header'
import { Postagens } from './components/postagem'
import { Tabs } from './components/tabs'
import { Api } from './api/api'

export function App() {
  const { api } = Api()

  api?.forEach((item) => {
    console.log(item.title)
  })

  return (
    <div className="space-y-5">
      <div className="space-y-5">
        <Header />
      </div>
      <main className="py-10 px-10 max-w-6xl mx-auto rounded-md space-y-5">
        <Tabs />
        <div className="flex flex-col space-y-5">
          <div>
            {api?.map((items) => (
              <div key={items.id}>
                <Postagens title={items.title} postagem={items.postagem} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
