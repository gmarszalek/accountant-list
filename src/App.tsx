import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Accountant from "./pages/AccountantPage"
import RootLayout from "./components/root-layout/root-layout"

export const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ksiegowi" element={<Accountant />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}
