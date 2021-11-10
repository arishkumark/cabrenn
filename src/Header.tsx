import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { withStyles } from '@mui/styles';

import LogoIcon from './icons/LogoIcon';
import TurnOffIcon from './icons/TurnOffIcon';
import EthIcon from './icons/EthIcon';
import VectorIcon from './icons/VectorIcon';

const Styles = (theme: { breakpoints: { down: (arg0: number) => any; }; }) => ({
  connectedBox: { 
    display: 'flex',
    background: '#dee2ea',
    marginRight: '32px',
    padding: '19px 32px',
    width: '245px',
    justifyContent: 'space-between',
    [theme.breakpoints.down(480)]: {
      width: '197px',
      padding: '19px 12px',
      marginRight: '12px'
    }
  }
})

const Header = ({ isConnected, onClick, onTurnOffClick, classes }: any) => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '25px' }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none'}}>
        <Toolbar>
          <LogoIcon />
          <Box sx={{ flexGrow: 1 }} />
          {!isConnected && <Button variant="contained" onClick={onClick} disableElevation size="large">Connet wallet</Button>}
          {isConnected && <Box sx={{ display: 'flex'}}>
            <Box className={classes.connectedBox}>
              <EthIcon />
              <Typography>0x3452...3d27</Typography>
              <VectorIcon />
            </Box>
            <IconButton onClick={onTurnOffClick} sx={{ padding: 0 }}>
              <TurnOffIcon />
            </IconButton>
          </Box>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withStyles(Styles)(Header)
