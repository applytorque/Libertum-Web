import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";
import store, { Persistor } from "../redux/store/Store";
import axios from "axios";
import "./index.css";
//wallet imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from "wagmi/chains";
import {
  AstarNetworkChain,
  avalancheChain,
  BinanceSmartChain,
  BinanceTestNet,
  kavaChain,
} from "./config/web3/chains/chains";
import {
  braveWallet,
  coinbaseWallet,
  ledgerWallet,
  trustWallet,
  metaMaskWallet,
  walletConnectWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets";


const { chains, provider } = configureChains(
  [
    polygonMumbai,
    BinanceSmartChain,
    BinanceTestNet,
    mainnet,
    polygon,
    optimism,
    arbitrum,
    avalancheChain,
    AstarNetworkChain,
    kavaChain,
  ],
  [
    alchemyProvider({
      apiKey: "ePeu2ooFujhSUo_Pqf5NS2uVDnz6ZiOO",
      priority: 0,
    }),
    publicProvider({ priority: 1 }),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Libertum",
    wallets: [
      metaMaskWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

axios.defaults.baseURL =
  import.meta.env.VITE_BACK_ROUTE || "http://localhost:3001/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={Persistor}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            initialChain={polygonMumbai}
            theme={lightTheme({
              accentColor: "#F4911A",
              accentColorForeground: "white",
              borderRadius: "small",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            <Auth0Provider
              domain={import.meta.env.VITE_AUTH0_DOMAIN}
              clientId={import.meta.env.VITE_CLIENT_ID}
              authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
              <App />

            </Auth0Provider>
          </RainbowKitProvider>
        </WagmiConfig>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
