import React,{useContext,useState} from 'react'

const AppContext = React.createContext()


// sets a global context to out application
export const AppProvider = ({children})=> {
    
    const [tab,setTab] = useState('Chats')
    const [previousTab,setPreviousTab] = useState(null)

    const [showData,setShowData] = useState(false)
    

    const [focusedTab,setFocusedTab] = useState('Chats')
    return (

        <AppContext.Provider
            value={{
                tab,
                setTab,
                previousTab,
                setPreviousTab,
                showData,
                setShowData,
                focusedTab,
                setFocusedTab
            }}
        >
            {children}
        </AppContext.Provider>
    )
}


// custom hook for global context
export const useGlobalContext = ()=> {
    return useContext(AppContext)
}
