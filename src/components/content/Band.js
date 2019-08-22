import React from 'react'
import { Container } from 'reactstrap';
import MetaTags from 'react-meta-tags';

const Band = () =>{
  return(
    <div className="thehawkans-content">
      <MetaTags>
        <title>The Hawkans | Band</title>
        <meta name="description" content="Partyband for every occasion." />
        <meta property="og:title" content="The Hawkans | Band" />
        <meta property="og:image" content="https://www.thehawkans.com/thehawkans_cover.png" />
      </MetaTags>
      <Container>
        <div className="row">
          <div className="col-md-4 d-none d-md-block d-lg-block">
            <img
              className=""
              alt="The Hawnaks 2017"
              src={require("./img/theband.jpg")}
            />
          </div>
          <div className="col-md-7 mr-auto">
            <h1>The Band</h1>
            <p>
              The members of The Hawkans are from different parts of southern Finland but almost everyone now lives in Helsinki area.
            </p>
            <p>
              We are all 30-something years old which makes us both experienced and young at the same time! That's just amazing!!
            </p>
            <p>
              <small className="text-uppercase">Current members</small><br />
              <span className="emphasis">Vocals:</span> Olli "Baumheimer" Roiha <small>(fm)</small><br />
              <span className="emphasis">Guitar:</span> Henrik "Lethal Force" Castell <small>(fm)</small><br />
              <span className="emphasis">Guitar:</span> Julius "Lethal Strike" Uusikylä<br />
              <span className="emphasis">Bass:</span> Joakim "Gögu" Ekroos <small>(fm)</small><br />
              <span className="emphasis">Drums:</span> Viktor "Massive Attack" Wolff<br />
            </p>
            <p>
              <small className="text-uppercase">Former members</small><br />
              <span className="emphasis">Guitar:</span> Pekka "Täppisoolo" Tiainen <small>(fm)</small><br />
              <span className="emphasis">Drums:</span> Johan "Top Gun" Sannholm <small>(fm)</small><br />
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
        <hr />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Our party playlist includes</h1>
            <p><small>..but is not limited to</small></p>
            <div className="thehawkans-widetext">
                <p><span className="emphasis">The Black Keys </span>Lonely Boy</p>
                <p><span className="emphasis">Cameo  </span>Word Up</p>
                <p><span className="emphasis">Midnight Oil </span>beds are burning</p>
                <p><span className="emphasis">Billy Idol </span>Rebel Yell</p>
                <p><span className="emphasis">Roxette </span>Sleepig in My Car</p>
                <p><span className="emphasis">Joan Jett </span>I Love Rock and Roll</p>
                <p><span className="emphasis">Avicii </span>Hey brother</p>
                <p><span className="emphasis">Pink Floyd  </span>The Wall 1&2</p>
                <p><span className="emphasis">Survivor </span>Eye of the Tiger</p>
                <p><span className="emphasis">Kenny Logins </span>Danger Zone</p>
                <p><span className="emphasis">Alphaville </span>Big in Japan</p>
                <p><span className="emphasis">Pelle Miljoona </span>Tahdon rakastella sinua</p>
                <p><span className="emphasis">Dingo </span>Levoton tuhkimo</p>
                <p><span className="emphasis">Neljä baritonia </span>Popmusiikkia</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Band
