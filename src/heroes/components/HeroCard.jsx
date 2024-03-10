
import { Link } from "react-router-dom";


export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/${id}.jpg`;



  return (
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImageUrl} alt={superhero} className="card-img" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <h6 className="card-text">{alter_ego}</h6>
                {characters != alter_ego && <p>{characters}</p>}
                <Link to={`/hero/${id}`}>
                    Mas..
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
