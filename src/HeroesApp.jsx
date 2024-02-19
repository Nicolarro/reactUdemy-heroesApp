import { Route, Routes} from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

const HeroesApp = () => {
  return (
<Routes>
    <Route path="/*" element={<AppRouter/>}/>
</Routes>

  )
}

export default HeroesApp;