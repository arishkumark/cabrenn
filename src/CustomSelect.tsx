import * as React from 'react';
import { Box, FormControl, MenuItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import EthIcon from './icons/EthIcon';
import AvaxIcon from './icons/AvaxIcon';
import MaticIcon from './icons/MaticIcon';

const list = [
  {
    value: 'eth',
    label: 'ETH'
  },
  {
    value: 'matic',
    label: 'Matic'
  },
  {
    value: 'avax',
    label: 'AVAX'
  }
]

const Styles = (theme: { breakpoints: { down: (arg0: number) => any; }; }) => ({
  menuItem: {
    '&:hover': {
      background: '#fff'
    }
  },
  default: {
    position: 'relative',
    top: 5
  },
  balance: {
    display: 'flex',
  },
  input: {
    minHeight: 36,
    [theme.breakpoints.down(480)]: {
      padding: '0px',
      minHeight: 48
    }
  }
})

const CustomSelect = ({ classes, disabled , id, onDataChange, data }: any) => {

  const [value, setValue] = React.useState('Select');

  React.useEffect(() => {
    if (disabled) {
      setValue('Select')
    }
  }, [disabled])

  React.useEffect(() => {
    if (!disabled) {
      setValue(data.type)
    }
  }, [data.type])

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    onDataChange(id, event.target.value, 'select')
  };

  
  const getIcon = (value : string) => {
    let icon = null;
    switch(value) {
      case 'eth':
        icon = <EthIcon />
        break;
      case 'matic':
        icon = <MaticIcon />
        break;
      case 'avax':
        icon = <AvaxIcon />
        break;
      default:
        icon = <EthIcon />
    }
    return icon;
  }
  return (
      <Box sx={{ maxWidth: 180, minWidth: '34%', minHeight: 36 }}>
        <Box className={classes.balance}>
          <Typography variant="caption">{`${id === '0' ? 'From' :  'To'}`}</Typography>
        </Box>
        <FormControl fullWidth disabled={disabled}>
          <Select
            labelId="select-label"
            id="select"
            value={value}

            inputProps={{
              classes: {
                select: classes.input
              },
            }}
            onChange={handleChange}
            renderValue={() => (<Box sx={{ minHeight: 36 }}>
              {value !== 'Select' ? <MenuItem className={classes.menuItem}>
                <ListItemIcon>
                  {getIcon(value)}
                </ListItemIcon>
                <ListItemText>{list.find(item => item.value === value)?.label}</ListItemText>
              </MenuItem> : <Box sx={{ top: 5, position: 'relative' }}>Select</Box>}
            </Box>)}
          >
            {
              list.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  <ListItemIcon>
                    {getIcon(item.value)}
                  </ListItemIcon>
                  <ListItemText>{item.label}</ListItemText>
                </MenuItem>
              ))
            }
          </Select>
      </FormControl>
    </Box>
  );
}
export default withStyles(Styles)(CustomSelect)