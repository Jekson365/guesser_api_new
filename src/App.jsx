import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import '../src/styles/index.scss'
import '../src/styles/common.scss'
import Upload from './pages/upload/Upload'
import Admin from './pages/main/admin/Admin'
import Opening from './pages/opening/Opening'
import { createContext, useEffect, useState } from 'react'
import useCurrentUser from './hooks/users/UseCurrentUser'


export const CurrentUserContext = createContext();
function App() {
  const [currentUser, setCurrentUser] = useState()
  const { getCurrentUser, loading } = useCurrentUser();

  useEffect(() => {
    const init = async () => {
      const r = await getCurrentUser();
      setCurrentUser(r)
    }
    init()
  }, [])
  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/welcome' element={<Opening />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/manager' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
