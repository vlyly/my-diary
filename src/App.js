import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './routes/sigin'
import Main from './routes/main'
function App({ authService }) {
  const [init, setInit] = useState(false)
  const [user, setUser] = useState({ isLogin: false })

  useEffect(() => {
    authService.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        setUser({ isLogin: true })
      } else {
        console.log('...')
        setUser({ isLogin: false })
      }
      setInit(true)
    })
  }, [user.isLogin, authService]) //user나 prop으로 받아온 authService가 변경되었을 때 useEffect를 실행합니다.

  return (
    <div className="App">
      {init ? (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                user.isLogin ? (
                  <Main authService={authService} user={user} />
                ) : (
                  <Signin authService={authService} user={user} />
                )
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        'is initializing...'
      )}
    </div>
  )
}

export default App
