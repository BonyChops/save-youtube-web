import '@materializecss/materialize';
//import 'materialize-css';
import { Button, Card, Row, Col, Container, Section, TextInput, Icon } from 'react-materialize';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Prompt from './components/Prompt/Prompt';
import { useState } from 'react';

function App() {
  const [videoId, setVideoId] = useState(false);
  const [error, setError] = useState(false)
  const [tmpVideoLink, setTmpVideoLink] = useState("");

  const checkUrl = () => {
    if (tmpVideoLink.match(/^https:\/\/(.+)\.youtube\.com/) != null) {
      const url = new URL(tmpVideoLink);
      if (url.searchParams.has("v")) {
        console.log(url);
        setVideoId(url.searchParams.get("v"));
      }
    } else if (tmpVideoLink.match(/^https:\/\/youtu\.be/) != null) {
      const url = new URL(tmpVideoLink);
      console.log(url)
      setVideoId(url.pathname.substr(1));
    } else {

    }
  }

  return (
    <div className="App">
      <Header />
      <Section className="no-pad-bot" id="index-banner">
        <Container>
          <br /><br />
          <h1 className="header center orange-text">save-youtube</h1>
          <Row className="center">
            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            <TextInput className="header col s12 light" label="動画リンクを入力..." value={tmpVideoLink} onChange={(e) => { setTmpVideoLink(e.target.value) }} />
          </Row>
          <Row className="center">
            <button onClick={checkUrl} id="download-button" className="btn-large waves-effect waves-light orange"><Icon left={true}>sync</Icon> 解析</button>
          </Row>
          <br /><br />
        </Container>
        <Container>
          <div className="center">
            {videoId ? <Prompt key={videoId} vKey={videoId} /> : null}
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
