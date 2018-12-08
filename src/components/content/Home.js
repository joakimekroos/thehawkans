import React from 'react'
import { Container } from 'reactstrap';

const Home = () =>{
  return(
    <div className="thehawkans-page">
      <Container>
        <img
          alt="The Hawkans"
          src={require("./img/logo_24bit.png")}
        />
        <p
          className="slogan">
          Partyband for every occasion
        </p>
      </Container>
    </div>
  )
}

export default Home
