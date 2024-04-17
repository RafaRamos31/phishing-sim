import { Routes, Route } from 'react-router-dom'
import App from "../App"
import { Catched } from "../views/Catched"
import Results from "../views/Results"

export const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/catched/:idUser" element={<Catched />}></Route>
    </Routes>
  )
}
