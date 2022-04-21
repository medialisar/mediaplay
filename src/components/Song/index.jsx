
const Songs = () => {

  return (
    <>
      <div className="search-bar">

      </div>
      <div className="songs-container">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">Title</p>
          <p className="subtitle is-6">Artis</p>
          <p className="subtitle is-6">Album</p>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">Play</a>
          <a href="#" className="card-footer-item">Select</a>
        </footer>
      </div>
      </div>
    </>
  )
}

export default Songs;