import { Header } from './components/header'
import { Tabs } from './components/tabs'

export function App() {
  return (
    <div className="space-y-5">
      <div className="space-y-5">
        <Header />
      </div>
      <main className="py-10 px-10 max-w-6xl mx-auto rounded-md space-y-5">
        <Tabs />
        <div>
          <h1 className="text-2xl">Listinha</h1>
        </div>
      </main>
    </div>
  )
}
