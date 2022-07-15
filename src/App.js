import React, { useEffect } from "react";

const WEBSITE_URL = "https://deliveryapp.neemo.com.br/delivery/12756/menu";

function App() {
  useEffect(() => {
    window.location.replace(WEBSITE_URL);
  }, []);

  return <div />;
}

export default App;
