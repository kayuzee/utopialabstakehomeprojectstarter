import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, DAppProvider } from "@usedapp/core";
import { Redirect, Route, Switch } from 'react-router'
import { AccountButton } from "../components/account/AccountButton";
import SendTransaction from "../components/SendTransaction"
import { TopBar } from "../components/TopBar";
import { BrowserRouter } from 'react-router-dom';
import {Balance} from '../components/Balance'

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
      
      <SendTransaction/>
      
    </DAppProvider>
  );
}
export default MyApp;
