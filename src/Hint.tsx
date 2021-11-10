import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { withStyles } from '@mui/styles';

import Ellipse from './icons/Ellipse';


const Styles = (theme: { palette: { info: { main: any; }; }; breakpoints: { down: (arg0: number) => any; }; }) => ({
  hintContainer: {
    width: '432px',
    height: '640px',
    marginTop: '48px',
    background: theme.palette.info.main,
    padding: '0 32px',
    [theme.breakpoints.down(480)]: {
      width: '100%',
      height: 'auto',
      minHeight: '252px',
      marginTop: 0,
      paddingTop: '15px'
    }
  },
  commonWrapper: {
    textAlign: 'center',
    marginTop: '136px',
    [theme.breakpoints.down(480)]: {
      marginTop: '0px',
    }
  },
  ellipse: {
    marginBottom: '32px',
    [theme.breakpoints.down(480)]: {
      marginBottom: '0px',
      '& svg': {
        height: 52,
        width: 52
      }
    }
  },
  notConnected: {
    marginTop: '16px',
    textAlign: 'center'
  },
  connected: {
    marginTop: '16px',
    textAlign: 'center'
  },
  bottomMsg: {
    textAlign: 'left',
    borderTop: '1px solid',
    paddingTop: '16px',
    [theme.breakpoints.down(480)]: {
      paddingBottom: '16px'
    }
  }
})
const Hint = ({ isConnected, classes, onClick, dataEntered, data }: any) => {

  const getHeader = () => {
    if(isConnected) {
      if (dataEntered) {
        return 'Transaction details';
      }
      return 'Hint';
    }
    return 'Connect your wallet';
  }

  const getLabel = (val: any) => {
    let label = '';
    switch (val) {
      case 'eth':
        label = 'ETH'
        break;
      case 'matic':
        label = 'Matic'
        break;
      case 'avax':
        label = 'AVAX'
        break;
      default:
        break;
    }
    return label;
  }

  const getType = (val: string) => {
    const type = val === 'first' ? data[0].type : data[1].type
    return getLabel(type)
  }

  return (
    <Box className={classes.hintContainer}>
      <Box className={classes.commonWrapper}>
        <Box className={classes.ellipse}>
          <Ellipse />
        </Box>
        <Typography variant="h6">{getHeader()}</Typography>
      </Box>
      {
        !isConnected && 
        <Box className={classes.notConnected}>
          <Typography variant="body1">To start using the app, your wallet needs to be connected :)</Typography>
          <Link component="button" onClick={onClick} underline="none" sx={{ marginTop: '41px'}}>
            Connet wallet
          </Link>
        </Box>
      }
      {
        isConnected && !dataEntered &&
        <Box className={classes.connected}>
          <Typography variant="body1">You can choose any token on the list, if there is some missing you can try adding it by the <b>contract address.</b></Typography>
        </Box>
      }
      {
        isConnected && dataEntered &&
        <Box className={classes.connected}>
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant="body2">Liquidity Provider Fee</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <Typography variant="body2">{`0.0000005 ${getType('first')}`}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body2">Price Impact</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <Typography variant="body2">0.00%</Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body2">Allowed Slippage</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <Typography variant="body2">0.50%</Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="body2">Minimum Received</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <Typography variant="body2">{`0.0000005 ${getType('last')}`}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Box className={classes.bottomMsg}>
            <Typography variant="body2">{`Output is estimated. you will receive at least 99.95 ${getType('last')} or the transaction will revert.`}</Typography>
          </Box>
        </Box>
      }
    </Box>
  )
}

export default withStyles(Styles)(Hint);
