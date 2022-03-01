import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {
  AppStyled,
  NavStyled,
  BodyStyled,
  FooterStyled,
} from "./styles/Main.styled";
import NavBar from "./components/NavBar";
import PriceTracker from "./pages/PriceTracker";
import CoinPage from "./pages/CoinPage";
import Exchange from "./pages/Exchange";
import Footer from "./components/Footer";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("myr");
  const [loading, setLoading] = useState(false);

  // Get all coins
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        setCoins(res.data.slice(0, 100));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);

  return (
    <AppStyled>
      <NavStyled>
        <NavBar />
      </NavStyled>
      <BodyStyled>
        <Routes>
          <Route
            path="/"
            element={
              <PriceTracker
                loading={loading}
                coins={coins}
                currency={currency}
                setCurrency={setCurrency}
              />
            }
          />
          <Route path=":coinid" element={<CoinPage />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </BodyStyled>
      <FooterStyled>
        <Footer />
      </FooterStyled>
    </AppStyled>
  );
};

export default App;
