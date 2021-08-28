import '@materializecss/materialize';
//import 'materialize-css';
import { Button, Card, Row, Col, Container, Section, TextInput, Icon } from 'react-materialize';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Prompt from './components/Prompt/Prompt';
import axios from "axios";
import { useEffect, useState } from 'react';
import ModalCollection from './components/ModalCollection/ModalCollection';

function App() {
  const spamLinkListUrl = "https://gist.githubusercontent.com/BonyChops/b3f623424754d946ca333e032a53b6e0/raw/spamLink.json";
  const spamRegexListUrl = "https://gist.githubusercontent.com/BonyChops/b3f623424754d946ca333e032a53b6e0/raw/spamRegex.json"
  const [videoId, setVideoId] = useState(false);
  const [error, setError] = useState(false)
  const [tmpVideoLink, setTmpVideoLink] = useState("");
  const [spamLink, setSpamLink] = useState(false);
  const [spamRegex, setSpamRegex] = useState(false);
  const [channel, setChannel] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)
  useEffect(() => {
    axios.get(spamLinkListUrl).then((response) => {console.log(response.data); setSpamLink(response.data)});
    axios.get(spamRegexListUrl).then((response) => {setSpamRegex(response.data)});
  }, [])


  const checkUrl = () => {
    setVideoId(returnId(tmpVideoLink));
  }

  const returnId = (urlStr) => {
    if (urlStr.match(/https:\/\/(.+)\.youtube\.com/) != null) {
      const url = new URL(urlStr);
      if (url.searchParams.has("v")) {
        return url.searchParams.get("v");
      }
    } else if (urlStr.match(/https:\/\/youtu\.be/) != null) {
      const url = new URL(urlStr);
      console.log(url)
      return url.pathname.substr(1);
    } else {
      return false;
    }
  }

  return (
    <div className="App">
      <Header user={channel} setChannel={setChannel}/>
      <Section className="no-pad-bot" id="index-banner">
        <Container>
          <br /><br />
          <h1 className="header center orange-text">save-youtube</h1>
          <div className="center">
            <h5 className="col s12 light">YouTube世紀末コメントを一掃</h5><br />
            <TextInput style={{width: "100%"}} className="col s12 light" label="動画リンクを入力..." value={tmpVideoLink} onChange={(e) => { setTmpVideoLink(e.target.value) }} />
          </div>
          <Row className="center">
            <button onClick={checkUrl} id="download-button" className="btn-large waves-effect waves-light orange"><Icon left={true}>assessment</Icon> 解析</button>
          </Row>
          <br /><br />
        </Container>
        <Container>
          <div className="">
            {videoId && spamLink && spamRegex ? <Prompt key={videoId} vKey={videoId}
            spamLink={spamLink} spamRegex={spamRegex} returnId={returnId}
            setChannel={setChannel} setOpenConfirmDialog={setOpenConfirmDialog} setTmpVideoLink={setTmpVideoLink}
            setVideoId={setVideoId}/> : null}
          </div>
        </Container>
        <ModalCollection user={channel} openConfirmDialog={openConfirmDialog} setOpenConfirmDialog={setOpenConfirmDialog}/>
      </Section>
     {/*  <Footer /> */}
    </div>
  );
}

export default App;
