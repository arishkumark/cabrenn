import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function Ellipse() {
  return (
    <SvgIcon
      sx={{
        width: 96,
        height: 96
      }}
      viewBox="0 0 96 96"
    >
      <circle cx="48" cy="48" r="48" fill="#B3BCD0" fillOpacity="0.4"/>
    </SvgIcon>
  );
}