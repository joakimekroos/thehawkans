import React from 'react'
// import MetaTags from 'react-meta-tags';

const Contact = () =>{
  return(
    <div className="thehawkans-content contact">
      <>
        {/* <MetaTags>
          <title>The Hawkans | Contact</title>
          <meta name="description" content="Partyband for every occasion." />
          <meta property="og:title" content="The Hawkans | Contact" />
          <meta property="og:image" content="https://www.thehawkans.com/thehawkans_cover.png" />
        </MetaTags> */}
        <div className="row">
          <div className="col-md-6">
            <p>
              <span className="emphasis">@: </span>thehawkans@gmail.com
            </p>
            <p>
              <span className="emphasis">#: </span>040 5300 125
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <span className="emphasis">www: </span>
              <a href="//thehawkans.com" target="_blank" rel="noopener noreferrer">thehawkans.com</a>
            </p>
            <p>
              <span className="emphasis">facebook: </span>
              <a href="//facebook.com/thehawkans" target="_blank" rel="noopener noreferrer">facebook.com/thehawkans</a>
            </p>
            <p>
              <span className="emphasis">youtube: </span>
              <a href="https://www.youtube.com/@thehawkans8298/videoss" target="_blank" rel="noopener noreferrer">The Hawkans on YouTube</a>
          </p>
            <p>
              <span className="emphasis">spotify: </span>
              <a href="//open.spotify.com/artist/1sz1l9exwoVnqDkrYvyLIu" target="_blank" rel="noopener noreferrer">The Hawkans on spotify</a>
            </p>
          </div>
        </div>
      </>
    </div>
  )
}

export default Contact
