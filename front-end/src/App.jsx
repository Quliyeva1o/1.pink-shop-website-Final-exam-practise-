import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { root } from './rooter/rooter'
import CardsContext from './context/CardsContext/CardsContext'
import { useEffect, useState } from 'react'
import { getAll } from './API/requests'
import { endpoints } from './API/constants'
function App() {
  const router = createBrowserRouter(root)

  const [cards, setCards] = useState([])

  useEffect(() => {
    getAll(endpoints.cards).then((res) => {
      setCards(res.res.data)
    })
  },[])
  return (
    <>
      <CardsContext.Provider value={{cards, setCards}}>
        <RouterProvider router={router}></RouterProvider>
      </CardsContext.Provider>
    </>
  )
}

export default App
