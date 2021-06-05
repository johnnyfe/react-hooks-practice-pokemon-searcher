import React from "react";

function Search({currentSearch, setCurrentSearch}) {

  function handleChange(e){
    setCurrentSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"  onChange={handleChange} value={currentSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
