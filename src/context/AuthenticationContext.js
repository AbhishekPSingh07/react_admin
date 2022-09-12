import {createContext, useEffect, useReducer } from 'react'
import AuthenticationReducer from './AuthenticationReducer'
const INITIAL_STATE = {
    currentUser : null || JSON.parse(localStorage.getItem('user')),
    // check if ther is a string in the local storage if yes it convert into object using JSON.parse to retrieve the user
    //OR set null if none found.
}

// const INITIAL_STATE={
//     currentUser : null,
// }

export const AuthenticationContext = createContext(INITIAL_STATE)

export const AuthenticationContextProvider = ({children})=>{
    const[state,dispatch] = useReducer(AuthenticationReducer,INITIAL_STATE);

    useEffect(()=>{                 //JSON stringify converts object into a string
        localStorage.setItem("user",JSON.stringify(state.currentUser)) //used to store the state of a user in the local storage to avoid continous login after refreshing
    },[state.currentUser])

    return(
        <AuthenticationContext.Provider value={{currentUser:state.currentUser,dispatch}}>
            {children}
            </AuthenticationContext.Provider>
    )
}