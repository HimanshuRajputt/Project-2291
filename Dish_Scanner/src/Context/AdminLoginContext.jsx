/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export const  AdminLoginContext = createContext()
export const AdminLoginProvider = ({children}) => {
    const [AdminLogin, setAdminLogin]= useState(false)

    const AdminLoginUpdater= ()=>{
        setAdminLogin(!AdminLogin)
    }

  return (
        <AdminLoginContext.Provider value={{AdminLogin,AdminLoginUpdater}}>
            {children}
        </AdminLoginContext.Provider>
  )
}
