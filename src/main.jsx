import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PokemonDetail } from './routes/pokemonDetailPage'
import { PokemonPaginationProvider } from './contexts/pokemonPagination'
import { PokemonComparePage } from './routes/PokemonComparePage'
import PokemonHomePage from './routes/App'
import ErrorPage from './routes/errorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonHomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: 'pokemon/:pokemonName',
    element: <PokemonDetail />
  },
  {
    path: 'compare/pokemon1/:pokemonName1/pokemon2/:pokemonName2',
    element: <PokemonComparePage />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonPaginationProvider>
      <RouterProvider router={router} />
    </PokemonPaginationProvider>
  </React.StrictMode>
)
