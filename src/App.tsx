import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Orders from "./pages/orders/Orders"
import Delivery from "./pages/delivery/Delivery"
import { useTelegramLoginQuery } from "./redux/services/authService"


function App() {

  const { data: authData } = useTelegramLoginQuery()

  console.log(authData)

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  )
}

export default App
