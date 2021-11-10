import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function SwapIcon() {
  return (
    <SvgIcon
      sx={{
        width: 64,
        height: 64
      }}
      viewBox="0 0 64 64"
    >
      <rect width="64" height="64" fill="#1F6DC9" fillOpacity="0.2"/>
      <path d="M27.65 22.35L24.86 25.14C24.54 25.46 24.76 26 25.21 26H27V40C27 40.55 27.45 41 28 41C28.55 41 29 40.55 29 40V26H30.79C31.24 26 31.46 25.46 31.14 25.15L28.35 22.36C28.16 22.16 27.84 22.16 27.65 22.35Z" fill="#1F6DC9"/>
      <path d="M36.35 41.65L39.14 38.86C39.46 38.54 39.24 38 38.79 38H37V24C37 23.45 36.55 23 36 23C35.45 23 35 23.45 35 24V38H33.21C32.76 38 32.54 38.54 32.86 38.85L35.65 41.64C35.84 41.84 36.16 41.84 36.35 41.65Z" fill="#1F6DC9"/>
    </SvgIcon>
  );
}