import * as React from 'react';
import { Container, Tabs, Tab, Box, Typography} from '@mui/material';
import { withStyles } from '@mui/styles';
import Swap from './Swap';
const tabData = [
  {
    id: 'swap',
    label: 'Swap'
  },
  {
    id: 'pool',
    label: 'Pool'
  }
]

const Styles = (theme: { palette: { common: { white: any; }; }; breakpoints: { down: (arg0: number) => any; }; }) => ({
  contentContainer: {
    height: '640px', 
    background: theme.palette.common.white,
    [theme.breakpoints.down(480)]: {
      height: '460px',
    }
  }
})

const ColorTabs = ({ classes, isConnected, isDataEntered, getData}: any) => {
  const [value, setValue] = React.useState(tabData[0].id);
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={false} sx={{
      maxWidth: '600px',
      marginLeft: 0
    }} disableGutters>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              display: 'none'
            }
          }}
          variant="fullWidth"
          aria-label="secondary tabs example"
        >
          {
            tabData.map((tab) => (
              <Tab key={tab.id} value={tab.id} label={tab.label} />
            ))
          }
        </Tabs>
      </Box>
      <Box className={classes.contentContainer}>
        {
          value === 'swap' && <Swap isConnected={isConnected} isDataEntered={isDataEntered} getData={getData} />
        }
        {
          value === 'pool' && <Box sx={{ padding: 20 }}>
            <Typography variant="h4">Coming soon !!!</Typography>
          </Box>
        }
      </Box>
    </Container>
  );
}

export default withStyles(Styles)(ColorTabs)
