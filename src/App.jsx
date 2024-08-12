
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Components/UserContextProvider'

function App() {

  return (
    <>
      <h1>Welcome to Context</h1>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

    </>
  )
}

export default App
