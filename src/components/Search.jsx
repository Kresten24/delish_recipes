import "./Search.css";

const Search = (props) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={props.input}
          onChange={(e) => props.setInput(e.target.value)}
          className="search-input"
          placeholder="Seach Recipe"
          onKeyDown={props.enterKeyHandler}
        />
        <button className="search-button" onClick={props.searchHandler}>
          Search
        </button>
      </div>

    </div>
  );
};
export default Search;
