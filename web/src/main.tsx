import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.less";
import "@/locales/i18n.ts";
import { initVChartSemiTheme } from '@visactor/vchart-semi-theme';

initVChartSemiTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
