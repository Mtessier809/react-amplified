import PropTypes from "prop-types";
import "./LanguageSwitcher.css";
import { useTranslation } from "react-i18next";
import React from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Español" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <LanguageSwitcherSelector
        lang={i18n.resolvedLanguage}
        handleChangeLanguage={changeLanguageHandler}
      />
    </div>
  );
};

const LanguageSwitcherSelector = ({ lang, handleChangeLanguage }) => {
  const onChange = (e) => handleChangeLanguage(e.target.className);

  const options = languages.map((language) => {
    if (language.code !== lang) {
      return (
        <li key={language.code} onClick={onChange}>
          <div value={language.code} className={language.code}></div>
        </li>
      );
    } else {
      return null;
    }
  });
  console.log(options);
  return (
    <div className="lang">
      <div className={lang}></div>
      <ul className="dropdown">{options}</ul>
    </div>
  );
};

LanguageSwitcherSelector.propTypes = {
  lang: PropTypes.string.isRequired,
  handleChangeLanguage: PropTypes.func.isRequired,
};
export default LanguageSwitcher;
