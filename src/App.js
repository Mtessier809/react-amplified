import logo from "./logo.svg";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="description">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org  "
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("learn")}
        </a>
      </header>
      <LanguageSwitcher />
    </div>
  );
}

export default App;
