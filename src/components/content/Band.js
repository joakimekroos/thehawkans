import React from "react";
import { Container } from "reactstrap";
import MetaTags from "react-meta-tags";

const Band = () => {
  return (
    <div className="thehawkans-content band">
      <MetaTags>
        <title>The Hawkans | Band</title>
        <meta name="description" content="Partyband for every occasion." />
        <meta property="og:title" content="The Hawkans | Band" />
        <meta
          property="og:image"
          content="https://www.thehawkans.com/thehawkans_cover.png"
        />
      </MetaTags>
      <Container>
        <div className="row">
          <div className="col-md-4 d-none d-md-block d-lg-block">
            <img
              className=""
              alt="The Hawnaks 2017"
              src={require("../../images/theband.jpg")}
            />
          </div>
          <div className="col-md-7 mr-auto">
            <h1>The Band</h1>
            <p>
              The members of The Hawkans are from different parts of southern
              Finland but almost everyone now lives in Helsinki area.
            </p>
            <p>
              We are all 30-something years old which makes us both experienced
              and young at the same time! That's just amazing!!
            </p>
            <p>
              <small className="text-uppercase">Current members</small>
              <br />
              <span className="emphasis">Vocals:</span> Olli "Baumheimer" Roiha{" "}
              <small>(fm)</small>
              <br />
              <span className="emphasis">Guitar:</span> Henrik "Lethal Force"
              Castell <small>(fm)</small>
              <br />
              <span className="emphasis">Guitar:</span> Julius "Lethal Strike"
              Uusikylä
              <br />
              <span className="emphasis">Bass:</span> Joakim "Gögu" Ekroos{" "}
              <small>(fm)</small>
              <br />
              <span className="emphasis">Drums:</span> Viktor "Massive Attack"
              Wolff
              <br />
            </p>
            <p>
              <small className="text-uppercase">Former members</small>
              <br />
              <span className="emphasis">Guitar:</span> Pekka "Täppisoolo"
              Tiainen <small>(fm)</small>
              <br />
              <span className="emphasis">Drums:</span> Johan "Top Gun" Sannholm{" "}
              <small>(fm)</small>
              <br />
            </p>
            <p>
              <small>fm = founding member</small>
            </p>
          </div>
          <div className="d-md-none d-lg-none">
            <img
              className=""
              alt="The Hawnaks 2017"
              src={require("../../images/theband.jpg")}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Our party playlist includes</h1>
            <p>
              <small>...but is not limited to</small>
            </p>
            <div className="thehawkans-ultrawidetext">
              <p class="spreadspan">
                <span className="emphasis">Billy Idol</span>
                <span>Rebel Yell</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Joan Jett</span>
                <span>I Love Rock and Roll</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">The Black Keys</span>
                <span>Lonely Boy</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Survivor</span>
                <span>Eye of the Tiger</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Cameo</span>
                <span>Word Up</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Midnight Oil</span>
                <span>Beds are burning</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Neljä baritonia</span>
                <span>Popmusiikkia</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Alphaville</span>
                <span>Big in Japan</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Kenny Logins</span>
                <span>Danger Zone</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Dingo</span>
                <span>Levoton tuhkimo</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Pelle Miljoona</span>
                <span>Tahdon rakastella sinua</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Roxette</span>
                <span>Sleeping in My Car</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">The Cranberries</span>
                <span>Zombie</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Avicii</span>
                <span>Hey brother</span>
              </p>
              <p class="spreadspan">
                <span className="emphasis">Pink Floyd</span>
                <span>The Wall 1&2</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Band;
