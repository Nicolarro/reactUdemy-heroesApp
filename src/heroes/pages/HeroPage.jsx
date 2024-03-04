import { Navigate, useParams } from "react-router-dom"
import {getHeroesById} from "../helpers/getHeroesById";
import HeroeDescription from "./HeroeDescription";

export const HeroPage = () => {

      const {id} = useParams();
      const hero = getHeroesById(id);

      if(!hero){
        return <Navigate to={'/'} />;
      }

      
      return (  
    <>
    <h1>HeroPage</h1>
    <HeroeDescription hero={id}/>


    </>
  )
}

export default HeroPage;