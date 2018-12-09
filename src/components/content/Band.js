import React from 'react'
import { Container } from 'reactstrap';

const Band = () =>{
  return(
    <div className="thehawkans-content">
      <Container>
        <div className="row">
          <div className="col-md-4 d-none d-md-block d-lg-block">
            <img
              className=""
              alt="The Hawnaks 2017"
              src={require("./img/theband.jpg")}
            />
          </div>
          <div className="col-md-8">
            <h1>The Band</h1>
            <p>
              The members of The Hawkans are from different parts of southern Finland but almost everyone now lives in Helsinki area.
              We are all 30-something years old which makes us both experienced and young at the same time! That's just amazing!!
            </p>
            <p>
              <span className="emphasis">Vocals:</span> Olli "Baumheimer" Roiha (fm)<br />
              <span className="emphasis">Guitar:</span> Henrik "Lethal Force" Castell (fm))<br />
              <span className="emphasis">Guitar:</span> Julius "Lethal Strike" Uusikylä)<br />
              <span className="emphasis">Bass:</span> Joakim "Gögu" Ekroos (fm))<br />

              <span className="emphasis">Drums:</span> Viktor "Massive Attack" Wolff)<br />
            </p>
            <p>
              <span className="emphasis">Former members)</span><br />
              <span className="emphasis">Guitar:</span> Pekka "Täppisoolo" Tiainen (fm))<br />
              <span className="emphasis">Drums:</span> Johan "Top Gun" Sannholm (fm))<br />
            </p>
            <p><small>fm = founding member</small></p>
          </div>
          <div className="d-md-none d-lg-none">
            <img
              className=""
              alt="The Hawnaks 2017"
              src={require("./img/theband.jpg")}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Band
