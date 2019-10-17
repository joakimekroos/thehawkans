import React from 'react'
import { Container } from 'reactstrap';
import YouTube from 'react-youtube';
import MetaTags from 'react-meta-tags';

const Music = () =>{
  return(
    <div className="thehawkans-content">
      <MetaTags>
        <title>The Hawkans | Music</title>
        <meta name="description" content="Partyband for every occasion." />
        <meta property="og:title" content="The Hawkans | Music" />
        <meta property="og:image" content="https://www.thehawkans.com/thehawkans_cover.png" />
      </MetaTags>
      <Container>
        <div className="row">
          <div className="col-md-12">
            <h1>Video</h1>
            <div class="embed-responsive embed-responsive-16by9">
              <YouTube
                videoId="hMd7JB3TY-E"
              />
            </div>
            <hr />
            <h1>Audio</h1>
            <iframe title="We Only Meet at Night" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/673135628&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <iframe title="Rock 'n' Roll City" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/350511058&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <iframe title="Supersonic Interceptor" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/251314204&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <iframe title="Fatal Attraction" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/250818400&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <iframe title="Rocket of Love" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178936960&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <iframe title="When the Lightning Strikes" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178136758&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Music
