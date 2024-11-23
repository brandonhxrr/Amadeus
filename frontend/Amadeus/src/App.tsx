import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { ResultsPage } from "./pages/ResultsPage";

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Search />} />
            <Route path="search" element={<ResultsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
