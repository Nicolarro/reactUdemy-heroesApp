import { Navigate, Route, Routes } from "react-router-dom"
import MarvelPage  from "../heroes/pages/MarvelPage"
import  HeroPage from '../heroes/pages/HeroPage';
import SearchPage from '../heroes/pages/SearchPage';
import DCPage from '../heroes/pages/DCPage';
import LoginPage from "../auth/pages/LoginPage";
import { Navbar } from "../../../../hooksApp/hooksApp/src/ui/components/Navbar";

export const AppRouter = () => {

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/marvel" element={<MarvelPage />}/>
          <Route path="/dc" element={<DCPage />}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/hero/:id" element={<HeroPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}
