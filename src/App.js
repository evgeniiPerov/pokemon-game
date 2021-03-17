import React, { useState } from 'react'
import GamePage from './routes/Game/Game'
import HomePage from './routes/Home/Home'

export default function App() {
  const [page, setPage] = useState('app')

  const handleChangePage = (page) => {
    console.log('<App/>')
    setPage(page)
  }
  switch (page) {
    case 'app':
      return <HomePage onChangePage={handleChangePage} />
    case 'game':
      return <GamePage onChangePage={handleChangePage} />
    default:
      return <HomePage />
  }
}
