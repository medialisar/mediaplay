const SearchBar = ( seacrhValue, searchSubmit ) => {
  return (
    <>
    <form  onSubmit={searchSubmit}>
      <div className="search-bar block">
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Find a song..." 
              onChange={ seacrhValue }
            />
          </div>
          <div className="control">
            <a className="button is-link">
              Search
            </a>
          </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default SearchBar