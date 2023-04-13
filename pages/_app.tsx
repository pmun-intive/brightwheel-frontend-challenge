import "@styles/global.css";
import Theme from "@styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
