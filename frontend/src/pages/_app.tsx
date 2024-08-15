import LayoutPage from "@/components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LayoutPage>
      <Component {...pageProps} />
      </LayoutPage>
    </ChakraProvider>
  );
}

export default MyApp;

