import React from 'react'
import { Container } from 'reactstrap';
import MetaTags from 'react-meta-tags';

const NotFound = () =>{
  return(
    <div className="thehawkans-content not-found">
      <MetaTags>
        <title>The Hawkans | Page not found</title>
        <meta name="description" content="Partyband for every occasion." />
        <meta property="og:title" content="The Hawkans | Page not found." />
        <meta property="og:image" content="https://www.thehawkans.com/thehawkans_cover.png" />
      </MetaTags>
      <Container>
        <div className="row">
          <div className="col-md-6">
            <h1>
              Page Not Found
            </h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
