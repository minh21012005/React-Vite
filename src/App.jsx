import './components/todo/todo.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { getAccountApi } from './services/api.service'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.context'
import { Spin } from 'antd'

const App = () => {

  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);


  useEffect(() => { fetchUserInfo() }, [])

  const fetchUserInfo = async () => {
    const res = await getAccountApi();
    if (res.data) {
      setUser(res.data.user)
      console.log(res.data)
    }
    setIsAppLoading(false)
  }

  return (
    <>
      {isAppLoading === true ?
        <Spin style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App
