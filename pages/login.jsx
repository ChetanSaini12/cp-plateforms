import React from 'react'
import { setLogin } from './utils/isauth'
import { useRouter } from 'next/router';



const login = () => {
  const router = useRouter();
  const handleLogin = () => {
    setLogin();
    router.push('/');
  }



  return (
    <div>
      This is the login page
      <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default login
