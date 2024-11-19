import { Route, Routes } from "react-router-dom"
import { Layout } from "./shared/Layout"
import { Home } from "./components/Home"
import { Lounge } from "./components/Lounge"
import { Bookings } from "./components/Bookings"
import { Contact } from "./components/Contact"

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
        <Route path="lounge" element={<Lounge />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="contact" element={<Contact />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
