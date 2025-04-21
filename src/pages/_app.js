import "../styles/main.css";
import Sidebar from "../Components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
