import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("");
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={RouterLink} to="/">
            {t("Home")}
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            {t("About")}
          </Button>
          <button onClick={() => changeLanguage("fi")}>FI</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default function App() {
  return (
    <Suspense fallback="loading">
      <Header />
    </Suspense>
  );
}
