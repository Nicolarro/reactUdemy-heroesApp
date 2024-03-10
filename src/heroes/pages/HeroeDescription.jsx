import { useParams } from "react-router-dom";
import { getHeroesById } from "../helpers/getHeroesById";

const HeroeDescription = () => {

  const { id } = useParams();
  const heroe = getHeroesById(id);
  console.log(heroe);

  return (
      <h2>HeroeDescription</h2>
  );
};

export default HeroeDescription;