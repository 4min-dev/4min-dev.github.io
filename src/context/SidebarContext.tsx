import React, { createContext, useContext, useState, type ReactNode } from 'react'

type SidebarContextType = {
    isAsideActive: boolean
    toggleAside: () => void
    openAside: () => void
    closeAside: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAsideActive, setIsAsideActive] = useState(false)

    const toggleAside = () => setIsAsideActive(prev => !prev)
    const openAside = () => setIsAsideActive(true)
    const closeAside = () => setIsAsideActive(false)

    return (
        <SidebarContext.Provider value={{ isAsideActive, toggleAside, openAside, closeAside }}>
            {children}
        </SidebarContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = (): SidebarContextType => {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider')
    }
    return context
}