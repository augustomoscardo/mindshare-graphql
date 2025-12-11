import { Layout } from "./components/layout";
import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  )
}