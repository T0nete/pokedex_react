import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/errorPage'
import { PokemonDetail } from './routes/pokemonDetailPage'
import PokemonHomePage from './routes/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonHomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: 'pokemon/:pokemonName',
    element: <PokemonDetail />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
