import ReactDOM from 'react-dom/client'
import HeroesApp from './HeroesApp';
import {BrowserRouter} from 'react-router-dom';
import '../src/styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(

<BrowserRouter>
    <HeroesApp />
  </BrowserRouter>
);
