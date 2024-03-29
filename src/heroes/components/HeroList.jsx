import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import {HeroCard} from "./HeroCard";

const HeroList = ({publisher}) => {

const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  
return (
  <>
    <h2 style={{ color: "green" }}>{publisher} has the following heroes: </h2>
    <br />
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  </>
);
}

export default HeroList