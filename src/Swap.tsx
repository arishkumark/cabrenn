import * as React from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import InputAndSelect from './InputAndSelect';
import SwapIcon from './icons/SwapIcon';

const Styles = (theme: { breakpoints: { down: (arg0: number) => any; }; }) => ({
  wrapper: {
    padding: '48px 32px',
    [theme.breakpoints.down(480)]: {
      padding: '24px 16px'
    }
  },
  content: {
    margin: '48px 0',
    [theme.breakpoints.down(480)]: {
      margin: '24px 0'
    }
  },
  swapBtn: {
    marginTop: '48px',
    [theme.breakpoints.down(480)]: {
      marginTop: '0px',
      background: '#fff',
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      left: 0,
      bottom: 0
    }
  }
})

const Swap = ({ isConnected, isDataEntered, getData, classes }: any) => {
  const intialData = [
    {
      type: null,
      val: null,
      error: false
    },
    {
      type: null,
      val: null,
      error: false
    }
  ]
  const [data, setdata] = React.useState(intialData)
  const dataError = data.find(item => !item.type || !item.val || item.error) || data[0].type === data[1].type;

  React.useEffect(() => {
    if (!isConnected) {
      setdata(intialData)
    }
  }, [isConnected])

  React.useEffect(() => {
    isDataEntered(!dataError);
    getData(data);
  }, [dataError])

  const handleChange = (id, val, type, error) => {
    const localData = [...data];
    if(type === 'select') {
      localData[id].type = val
    } else {
      localData[id].val = val
      localData[id].error = error
    }
    setdata(localData)
  }

  const handleInterchange = () => {
    const reversedData = [...data].reverse();
    setdata(reversedData);
  }

  const getSwapDisabled = () => {
    return !isConnected || dataError;
  }
  return (
      <Box className={classes.wrapper}>
        <Typography variant="h5">Select a token to start swapping</Typography>
        <Box className={classes.content}>
          <InputAndSelect disabled={!isConnected} showMax onDataChange={handleChange} id="0" data={data[0]}/>
          <Box sx={{ textAlign: 'center', margin: '32px 0'}}>
            <IconButton onClick={handleInterchange} disabled={getSwapDisabled()}>
              <SwapIcon />
            </IconButton>
          </Box>
          <InputAndSelect disabled={!isConnected} showMax={false} onDataChange={handleChange} id="1" data={data[1]}/>
          <Box className={classes.swapBtn}>
            <Button disabled={getSwapDisabled()} size="large" fullWidth variant="contained" disableElevation>Swap</Button>
          </Box>
        </Box>
      </Box>
  );
}

export default withStyles(Styles)(Swap)