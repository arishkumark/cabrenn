import React, { useState } from 'react'
import { Box, TextField, Button, Typography, useMediaQuery } from '@mui/material';
import { withStyles } from '@mui/styles';

const Styles = (theme: { breakpoints: { down: (arg0: number) => any; }; }) => ({
  input: {
    minHeight: 36,
    [theme.breakpoints.down(480)]: {
      padding: '0px',
      minHeight: 48
    }
  },
  helperText: {
    marginLeft: 0
  },
  balance: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  wrapper: {
    minWidth: '64%',
    maxWidth: 340,
    [theme.breakpoints.down(480)]: {
      minWidth: '53%',
    }
  }
})

export const CustomInput = ({ classes, disabled, showMax=true, id, onDataChange, data }: any) => {
  const [value, setValue] =  useState('');
  const [error, setError] =  useState(false);
  const [msg, setMsg] =  useState('Max to use all your funds');
  const isMobile = useMediaQuery('(max-width:480px)');

  React.useEffect(() => {
    if (disabled) {
      setValue('')
    }
  }, [disabled])

  React.useEffect(() => {
    setValue(data.val)
  }, [data.val])

  const handleMax = () => {
    setValue('100')
  }
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value)
    if (isNaN(Number(e.target.value))) {
      setError(true);
      setMsg('Please enter valid number');
      onDataChange(id, e.target.value, '', true)
    } else if(Number(e.target.value) < 0.1) {
      setError(true)
      setMsg('Minimun amount for conversion is 0.1')
      onDataChange(id, e.target.value, '', true)
    } else if(Number(e.target.value) > 100) {
      setError(true)
      setMsg('Please enter value less than 100')
      onDataChange(id, e.target.value, '', true)
    } else {
      setError(false)
      setMsg('Max to use all your funds')
      onDataChange(id, e.target.value, '', false)
    }
  }
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.balance}>
        <Typography variant="caption">Amount</Typography>
        {!disabled && id === '0' && <Typography variant="caption">Balance 100 ETH</Typography>}
      </Box>
      <TextField
        fullWidth
        disabled={disabled}
        onChange={handleChange}
        value={value}
        InputProps={{
          classes: {
            input: classes.input
          },
          endAdornment: (showMax && !isMobile && <Button disabled={disabled} onClick={handleMax} variant="contained" color="secondary" disableElevation>Max</Button>)
        }}
        required
        variant="outlined"
        helperText={(id === '0' || (id === '1' && error)) && msg}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText
          }
        }}
        error={error}
      />
    </Box>
  )
}


export default withStyles(Styles)(CustomInput)