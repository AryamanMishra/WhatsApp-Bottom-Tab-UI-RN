import React,{useContext,useState} from 'react'

const AppContext = React.createContext()


// sets a global context to out application
export const AppProvider = ({children})=> {
    

    const [showData,setShowData] = useState(false)
    
    const [focusedTab,setFocusedTab] = useState('Chats')

    const [longPressChat,setLongPressChat] = useState(false)

    const [selectedChatId,setSelectedChatId] = useState(0)
    
    return (

        <AppContext.Provider
            value={{
                showData,
                setShowData,
                focusedTab,
                setFocusedTab,
                longPressChat,
                setLongPressChat,
                selectedChatId,
                setSelectedChatId
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
