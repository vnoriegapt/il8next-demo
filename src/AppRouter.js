import React from 'react';
import { withTranslation, Trans } from "react-i18next";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import Language from './Language';
import './styles.css';

const AppRouter = (props) => {
  const { t } = props;
  const Home = () => <HomePage t={t} />;
  const About = () => <AboutPage t={t} />;
  return (
    <Router>
      <nav className="nav router">
        <Link to="/">
          <Trans>{t("homePage")}</Trans>
        </Link>
        <Link to="/about">
          <Trans>{t("aboutPage")}</Trans>
        </Link>
        <Language />
      </nav>
      <Route
          path="/"
          exact
          component={Home}
        />
        <Route
          path="/about"
          component={About}
        />
    </Router>
  );
};

export default withTranslation("navMenu")(AppRouter);