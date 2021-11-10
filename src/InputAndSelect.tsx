import React from 'react'
import { Box, Typography} from '@mui/material';
import { withStyles } from '@mui/styles';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';

const Styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const InputAndSelect = ({ showMax, onDataChange, disabled, id, data }: any) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <CustomSelect disabled={disabled} onDataChange={onDataChange} id={id} data={data} />
      <CustomInput disabled={disabled} showMax={showMax} onDataChange={onDataChange} id={id} data={data}/>
    </Box>
  )
}

export default withStyles(Styles)(InputAndSelect)

