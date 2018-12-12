import React from 'react'
import { Container } from 'reactstrap';
import MetaTags from 'react-meta-tags';

const Contact = () =>{
  return(
    <div className="thehawkans-content contact">
      <Container>
        <MetaTags>
          <title>The Hawkans | Contact</title>
          <meta name="description" content="Partyband for every occasion." />
          <meta property="og:title" content="The Hawkans | Contact" />
          <meta property="og:image" content="https://www.thehawkans.com/thehawkans_cover.png" />
        </MetaTags>
        <div className="row">
          <div className="col-md-6">
            <p>
              <span className="emphasis">@: </span>henrik.castell@gmail.com
            </p>
            <p>
              <span className="emphasis">#: </span>040 5300 125
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <span className="emphasis">www: </span>
              <a href="//thehawkans.com" target="_blank">thehawkans.com</a>
            </p>
            <p>
              <span className="emphasis">facebook: </span>
              <a href="//facebook.com/thehawkans" target="_blank">facebook.com/thehawkans</a>
            </p>
            <p>
              <span className="emphasis">soundcloud: </span>
              <a href="//soundcloud.com/thehawkans" target="_blank">soundcloud.com/thehawkans</a>
          </p>
            <p>
              <span className="emphasis">spotify: </span>
              <a href="//open.spotify.com/artist/1sz1l9exwoVnqDkrYvyLIu" target="_blank">The Hawkans on spotify</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
