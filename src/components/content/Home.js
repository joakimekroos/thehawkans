import React from 'react'
import { Container } from 'reactstrap';

const Home = () =>{
  return(
    <div className="thehawkans-content">
      <Container>
        <img
          alt="The Hawkans"
          src={require("./img/logo_24bit.png")}
        />
        <p
        className="slogan">
        Partyband for every occasion
        </p>
        <div className="col-xs-12 ml-auto mr-auto thehawkans-widetext">
          <p>
            The Hawkans is a party/cover band from Helsinki.
            We mainly play wedding, company, and student parties, and during the years we have played about 100 events.
            We will play at every possible occasion and we have the experience to make it work!
          </p>
          <p>
            The most important thing for us is rock music and the 80's, but of course both older and more recent material will find it's way onto our playlist.
            The key to a great party is to get people to dance and sing along with the band, and that's exactly what we're aiming for every time, together with a positive attitude and a laid back feeling.
          </p>
          <p>
            Please contact us if you need a band for your great party, or simply want to ask questions.
            We are open to song as well as other possible requests.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Home
