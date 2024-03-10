import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../hooks/useForm";

 const SearchPage = () => {

  const {searchText, onInputChange} = useForm({
    searchText: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search);


  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText.toLowerCase().toString()}`);

    console.log(searchText);
  }

  return (
    <>
      <div className="row">
      <h1>SearchPage</h1>
      <hr />
      <hr />
      <div className="col-5">
        <h4>Searching...</h4>
        <hr />
        <form action="">
            <input type="text"
            placeholder="Search a Hero"
            className="form-control"
            name= "searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}/>
            <br />
          <button className="btn btn-outline-primary" onClick={onSearchSubmit}>
            Search
          </button>
        </form>
        <br />
        <div className="col-7">
          <h1>Results</h1>
          <hr />

        <div className="alert alert-info">
          Search a hero
        </div>
        </div>
      </div>
      
      </div>

    </>
  )
}

export default SearchPage;