import * as React from 'react';
import { Container, Typography, Box}  from '@mui/material';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
import Content from '../src/Content';
import Header from '../src/Header';

export default function Index() {
  const [connected, setConnected] = React.useState(false);
  const handleConnect = () => {
    setConnected(true)
  }

  const handleTurnOff = () => {
    setConnected(false)
  }
  
  return (
    <Container
      disableGutters
      maxWidth="xl"
      className="mainContainer"
    >
      <Header isConnected={connected} onClick={handleConnect} onTurnOffClick={handleTurnOff} />
      <Content isConnected={connected} onClick={handleConnect} />
    </Container>
  );
}
