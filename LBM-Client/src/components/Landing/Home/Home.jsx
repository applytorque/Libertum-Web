import React from "react";
import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";
import { useAuth0 } from "@auth0/auth0-react";
import launchapp from "./assets/launchapp.svg";
import NavBar from "../NavBar/NavBar";
import "./Home.scss";

export default function Home() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const handleLogin = () => {
    loginWithRedirect({
      redirectUri: "http://localhost:5173/realestate/",
    });
  };
  return (
    <main className="home_items" name="home">
      <NavBar />
      <section className="home_section">
        <div>
          <div className="home_text">
            <h1>
              Tokenize Property, <span>Democratize Real Estate</span> and Earn
              Interest
            </h1>
            <p>
              DeFi platform for a fluid and all inclusive economy; Real Estate
              Investing made simple, accessible to everyone, anywhere and at
              anytime
            </p>
          </div>
          <div className="home_links">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <a className="launchapp" onClick={handleLogin}>
                <span>Launch App</span> <img src={launchapp} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <a href="/swap" className="token">
                Add Libertum Token
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
