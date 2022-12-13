import { useState } from 'react'
import '../css/App.css'
import DestinationPage from './components/DestinationPage'
import HomePage from './components/HomePage'
import Header from './components/Header'
import CrewPage from './components/CrewPage'
import TechnologyPage from './components/TechnologyPage'


function App() {
const [page, setPage] = useState([{
  page: "Homepage",
  pageOn: true
}])

  return (
    <div className='App'>
       <Header />
    {/* <HomePage /> */}
    {/* <DestinationPage /> */}
    {/* <CrewPage /> */}
    <TechnologyPage />
    </div>
  )
}

export default App
