import React from "react";
const SearchBar = ({onChange, onSubmit}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="search-bar block">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Find a song..."
                onChange={onChange}
              />
            </div>
            <div className="control">
              <button type="submit" className="button is-link">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
