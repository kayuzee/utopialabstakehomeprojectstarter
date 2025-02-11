import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, DAppProvider } from "@usedapp/core";
import SendTransaction from "../components/SendTransaction"

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <DAppProvider config={config}>
      <br/>
      <br/>
      <br/>
      <SendTransaction/>
      
    </DAppProvider>
  );
}
export default MyApp;
