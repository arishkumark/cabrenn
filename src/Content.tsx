import * as React from 'react';
import { Container, Box} from '@mui/material';
import { withStyles } from '@mui/styles';
import ColorTabs from './ColorTabs';
import Hint from './Hint';

const Styles = (theme: { breakpoints: { down: (arg0: number) => any; }; }) => ({
  wrapper: {
    display: 'flex',
    [theme.breakpoints.down(480)]: {
      display: 'block',
      padding: '0 16px'
    }
  },
  container: {
    maxWidth: '1032px',
    marginTop: '96px',
    [theme.breakpoints.down(480)]: {
      marginTop: '40px',
    }
  }
})

const Content = ({ onClick, isConnected, classes }: any) => {
  const [dataEntered, setDataEntered] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleDataEntered =(val: boolean) => {
    setDataEntered(val)
  }

  const handleGetData = (data: any) => {
    setData(data)
  }
  return (
    <Container className={classes.container} maxWidth={false} disableGutters>
      <Box className={classes.wrapper}>
        <ColorTabs isConnected={isConnected} isDataEntered={handleDataEntered} getData={handleGetData} />
        <Hint data={data} isConnected={isConnected} onClick={onClick} dataEntered={dataEntered} />
      </Box>
    </Container>
  );
}

export default withStyles(Styles)(Content)
