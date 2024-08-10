import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeaderMain from "./routes/HeaderMain"
import Home from "./routes/HeaderMain/Home"
import FindProfile from "./routes/HeaderMain/FindProfile"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderMain />}>
            <Route index element={<Home />} />
            <Route path="find-profile" element={<FindProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
