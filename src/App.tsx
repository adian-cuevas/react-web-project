import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import { NotificationProvider } from './context/NotificationProvider'

export default function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <AppRouter />
      </NotificationProvider>
    </BrowserRouter>
  )
}
