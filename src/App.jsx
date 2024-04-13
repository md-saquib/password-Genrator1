
import './App.css'
import PasswordGenrator from './Component/password gen/PasswordGenrator'
import PasswordProvider from './Component/PasswordProvider'

function App() {

  return (
    <>
      <PasswordProvider>
        <PasswordGenrator />
      </PasswordProvider>
    </>
  )
}

export default App
