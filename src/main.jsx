import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/ItemsContext.jsx";
import Layout from "./pages/components/Layout.jsx";
if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ContextProvider>
        <Layout>
          <App />
        </Layout>
      </ContextProvider>
    </StrictMode>
    ,
  </BrowserRouter>
);
