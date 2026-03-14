import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { BrowserRouter } from 'react-router-dom'
import AsidePanel from './ui/aside/AsidePanel.tsx'
import { SidebarProvider } from './context/SidebarContext.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SidebarProvider>
          <div className='flex overflow-hidden'>
            <AsidePanel />
            <App />
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
