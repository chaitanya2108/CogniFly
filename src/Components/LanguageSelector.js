import React from "react";
import styles from "./ModuleView.module.css";

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className={styles["language-container"]}>
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className={styles["language-dropdown"]}
      >
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="chinese">Chinese</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
