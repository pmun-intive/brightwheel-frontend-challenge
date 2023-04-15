import GlobalCSS from "@styles/global.css";
import Theme from "@styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import getTokens from "@kiwicom/orbit-components/lib/getTokens";
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";
import CompanyDataContextProvider from "utils/context/companyDataContextProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const customTokens = getTokens();
  return (
    <ThemeProvider theme={Theme}>
      <GlobalCSS />
      <OrbitProvider theme={{ orbit: customTokens }}>
        <CompanyDataContextProvider>
          <Component {...pageProps} />
        </CompanyDataContextProvider>
      </OrbitProvider>
    </ThemeProvider>
  );
}
