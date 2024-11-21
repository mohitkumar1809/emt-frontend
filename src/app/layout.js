"use client"
import { Provider } from "react-redux";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { store } from "@/redux/store";
import "@/styles/_main.scss";
import "@/styles/v1style/feather-icons.css";
import "@/styles/v1Style/bootstrap-icons.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="layout">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
