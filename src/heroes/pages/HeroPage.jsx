import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers/getHeroesById";


export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = getHeroesById(id);
  console.log(id);

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }
  const onReturn = () => {
    return navigate(-1);
  }

  return (
        <div className="row mt-5">
        <div className="col-4">
          <img src={`../../../assets/${id}.jpg`} alt={hero.superhero}  
          className="img-thumbnail animate__animated animate__fadeIn"/>
        </div>
      
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p><strong>Alter Ego:</strong> {hero.alter_ego}</p>
            </li>
            <li className="list-group-item">
            <p><strong>Publisher:</strong> {hero.publisher}</p>
            </li>
          </ul>
          <h5 className="mt-3">Characters: </h5>
          <p>{hero.characters}</p>

          <button className="btn btn-outline-primary" onClick={onReturn}>
            Regresar
          </button>
        </div>
        </div>
  )
}
export default HeroPage;
