import './css/App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
function App() {
  let router = useRoutes(routes)
  

  return (
    <>
      <Sidebar/>

      <main className='main'>
        <Header />
        {router}
        {/* Router */}
      </main>
    </>
  )
}

export default App
