import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Box, FormGroup, FormControlLabel, Switch  } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme, darkTheme } from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import './global.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [isDarkMode, setDarkMode] = React.useState(false)

  const handleColorMode = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setDarkMode(event.target.checked)
  }
  const getTheme = isDarkMode ? darkTheme : theme;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={getTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box sx={{position: 'absolute', right: 0}}>
          <FormGroup>
            <FormControlLabel control={<Switch onChange={handleColorMode}/>} label="dark mode" />
          </FormGroup>
        </Box>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
