import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import "../components/Search.css";
import options from "../utils/listOfCuisine";
import Search from "../components/Search";


const Home = () => {
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const [filter, setFilter] = useState([]);
  
    useEffect(() => {
      searchHandler();
    }, [filter]);
  
    const filterHandler = (selected) => {
      setFilter(selected);
    };
  
    let searchHandler = () => {
      const spoonacularApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
      let selected = filter.map((el) => el.value).join(",");
      if (input.trim() !== "") {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularApiKey}&query=${input}&number=100&cuisine=${selected}`
        )
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.results);
          })
          .catch((error) => {
            console.error(error);
            setSearchResults([]);
          });
      }
    };
  return (
    <div>
      <Search input={input} setInput={setInput} searchHandler={searchHandler}></Search>
      <Filter
        filter={filter}
        setFilter={setFilter}
        options={options}
        filterHandler={filterHandler}
      ></Filter>

      <Pagination searchResults={searchResults}></Pagination>
    </div>
  );
};

export default Home;
