import "@/styles/_main.scss";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "@/styles/v1Style/bootstrap-icons.min.css";
import "@/styles/v1style/feather-icons.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">{children}</div>
      </body>
    </html>
  );
}
