import React from 'react'

import { createContext } from 'react'
 
export default AuthData = createContext()

function AuthContext({children}) {
    const  [token , setToken] = use
  return (
     <AuthData.Provider value={{}}>
        {children}
     </AuthData.Provider>
  )
}

export {AuthContext}