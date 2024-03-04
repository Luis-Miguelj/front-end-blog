import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { Header } from './components/header'
import { PostPage } from './post-page/post-page'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { SobreMim } from './sobre-mim/sobre-mim'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/postagens',
    element: <PostPage />,
  },
  {
    path: '/sobre-mim',
    element: <SobreMim />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
