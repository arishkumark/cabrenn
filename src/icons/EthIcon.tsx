import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function EthIcon() {
  return (
    <SvgIcon
      sx={{
        width: 24,
        height: 24
      }}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#4F68E8"/>
      <path d="M12.2768 3L12.156 3.41024V15.3133L12.2768 15.4338L17.8019 12.1678L12.2768 3Z" fill="#C0CBF6"/>
      <path d="M12.2754 3L6.75012 12.1678L12.2754 15.4338V9.65637V3Z" fill="white"/>
      <path d="M12.2768 16.4781L12.2087 16.5611V20.8012L12.2768 20.9999L17.8053 13.2139L12.2768 16.4781Z" fill="#C0CBF6"/>
      <path d="M12.2754 20.9999V16.4781L6.75012 13.2139L12.2754 20.9999Z" fill="white"/>
      <path d="M12.2745 15.44L17.7997 12.174L12.2745 9.6626V15.44Z" fill="#8197EE"/>
      <path d="M6.75012 12.174L12.2754 15.44V9.6626L6.75012 12.174Z" fill="#C0CBF6"/>
    </SvgIcon>
  );
}